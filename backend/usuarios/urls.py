from django.urls import path
from .views import RegistroUsuarioView, LoginUsuarioView, PerfilUsuarioView
from .views_reset import RequestPasswordResetView, ResetPasswordView
from .views_google import GoogleAuthView

urlpatterns = [
    path('register/', RegistroUsuarioView.as_view(), name='register'),
    path('login/', LoginUsuarioView.as_view(), name='login'),
    path('profile/', PerfilUsuarioView.as_view(), name='profile'),
    path('password-reset/', RequestPasswordResetView.as_view(), name='password-reset-request'),
    path('password-reset/<str:token>/', ResetPasswordView.as_view(), name='password-reset'),
    path('google-auth/', GoogleAuthView.as_view(), name='google-auth'),
]
