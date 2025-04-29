from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class Usuario(AbstractUser):
    email = models.EmailField(unique=True)
    # Puedes añadir campos adicionales aquí si lo deseas (por ejemplo, avatar, bio, idioma preferido)
    pass
