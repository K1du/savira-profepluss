from rest_framework import serializers
from .models import Documento

class DocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = ['id', 'usuario', 'archivo', 'nombre', 'tipo', 'fecha_subida']
        read_only_fields = ['id', 'usuario', 'fecha_subida']
