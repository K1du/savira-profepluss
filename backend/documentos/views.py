from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Documento
from .serializers import DocumentoSerializer

class DocumentoListCreateView(generics.ListCreateAPIView):
    serializer_class = DocumentoSerializer
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        return Documento.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class DocumentoRetrieveDestroyView(generics.RetrieveDestroyAPIView):
    serializer_class = DocumentoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Documento.objects.filter(usuario=self.request.user)
