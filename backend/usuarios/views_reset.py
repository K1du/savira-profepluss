from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from django.conf import settings

# Simple in-memory token store for demo (replace with DB or cache in prod)
RESET_TOKENS = {}

class RequestPasswordResetView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email requerido'}, status=400)
        try:
            user = User.objects.get(email=email)
            token = get_random_string(32)
            RESET_TOKENS[token] = user.username
            reset_url = f"http://localhost:3000/reset-password/{token}"
            send_mail(
                'Restablecimiento de contraseña ProfePluss',
                f'Usa este enlace para restablecer tu contraseña: {reset_url}',
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            return Response({'msg': 'Correo de restablecimiento enviado'})
        except User.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=404)

class ResetPasswordView(APIView):
    def post(self, request, token):
        password = request.data.get('password')
        username = RESET_TOKENS.get(token)
        if not password or not username:
            return Response({'error': 'Token o contraseña inválidos'}, status=400)
        try:
            user = User.objects.get(username=username)
            user.set_password(password)
            user.save()
            del RESET_TOKENS[token]
            return Response({'msg': 'Contraseña restablecida'})
        except User.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=404)
