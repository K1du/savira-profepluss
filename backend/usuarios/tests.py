from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Usuario

# Create your tests here.

class UsuarioAuthTests(APITestCase):
    def test_registro_usuario(self):
        url = reverse('register')
        data = {'username': 'testuser', 'email': 'test@example.com', 'password': 'testpass123'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Usuario.objects.filter(username='testuser').exists())

    def test_login_usuario(self):
        Usuario.objects.create_user(username='testuser', email='test@example.com', password='testpass123')
        url = reverse('login')
        data = {'username': 'testuser', 'password': 'testpass123'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_perfil_usuario(self):
        user = Usuario.objects.create_user(username='testuser', email='test@example.com', password='testpass123', first_name='Nombre', last_name='Apellido')
        self.client.force_authenticate(user=user)
        url = reverse('profile')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'testuser')
        # Test actualización
        data = {'first_name': 'NuevoNombre'}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], 'NuevoNombre')
