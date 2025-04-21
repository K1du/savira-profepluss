from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.conf import settings
import requests

class GoogleAuthView(APIView):
    def post(self, request):
        token = request.data.get('credential')
        if not token:
            return Response({'error': 'No se recibió token'}, status=400)
        # Validar token con Google
        google_resp = requests.get(f'https://oauth2.googleapis.com/tokeninfo?id_token={token}')
        if google_resp.status_code != 200:
            return Response({'error': 'Token de Google inválido'}, status=400)
        data = google_resp.json()
        email = data.get('email')
        name = data.get('name') or data.get('given_name')
        if not email:
            return Response({'error': 'No se obtuvo email de Google'}, status=400)
        user, created = User.objects.get_or_create(email=email, defaults={
            'username': email,
            'first_name': name or '',
            'is_active': True
        })
        # Opcional: actualizar nombre si cambia
        if not created and name and user.first_name != name:
            user.first_name = name
            user.save()
        # Generar token JWT de tu app (igual que login normal)
        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'created': created
        })
