from django.db import models
from usuarios.models import Usuario

class Documento(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='documentos')
    archivo = models.FileField(upload_to='documentos/')
    nombre = models.CharField(max_length=255)
    tipo = models.CharField(max_length=50, blank=True)
    fecha_subida = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
