from django.urls import path
from .views import RegistroUsuarioView, LoginUsuarioView, PerfilUsuarioView

urlpatterns = [
    path('register/', RegistroUsuarioView.as_view(), name='register'),
    path('login/', LoginUsuarioView.as_view(), name='login'),
    path('profile/', PerfilUsuarioView.as_view(), name='profile'),
]
