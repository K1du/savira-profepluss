from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Documento
from .ia_utils import resumir_texto, generar_test_opcion_multiple
from .ocr_utils import ocr_from_imagefile
import PyPDF2

class DocumentoResumenView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            documento = Documento.objects.get(pk=pk, usuario=request.user)
            # Si es imagen, aplicar OCR
            if documento.archivo.name.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff')):
                texto = ocr_from_imagefile(documento.archivo)
            # Si es PDF, extraer texto
            elif documento.archivo.name.endswith('.pdf'):
                with documento.archivo.open('rb') as f:
                    reader = PyPDF2.PdfReader(f)
                    texto = " ".join([page.extract_text() or '' for page in reader.pages])
            else:
                texto = documento.archivo.read().decode(errors='ignore')
            if not texto.strip():
                return Response({'error': 'No se pudo extraer texto del documento.'}, status=400)
            resumen = resumir_texto(texto)
            return Response({'resumen': resumen, 'texto_extraido': texto[:1000]})
        except Documento.DoesNotExist:
            return Response({'error': 'Documento no encontrado.'}, status=404)
        except Exception as e:
            return Response({'error': str(e)}, status=500)

# NUEVO: Endpoint para generación de tests tipo opción múltiple con explicación IA
def extraer_texto_documento(documento):
    if documento.archivo.name.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff')):
        return ocr_from_imagefile(documento.archivo)
    elif documento.archivo.name.endswith('.pdf'):
        with documento.archivo.open('rb') as f:
            reader = PyPDF2.PdfReader(f)
            return " ".join([page.extract_text() or '' for page in reader.pages])
    else:
        return documento.archivo.read().decode(errors='ignore')

class DocumentoTestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            documento = Documento.objects.get(pk=pk, usuario=request.user)
            texto = extraer_texto_documento(documento)
            if not texto.strip():
                return Response({'error': 'No se pudo extraer texto del documento.'}, status=400)
            num_preguntas = int(request.data.get('num_preguntas', 5))
            tests = generar_test_opcion_multiple(texto, num_preguntas=num_preguntas)
            return Response({'tests': tests, 'texto_extraido': texto[:1000]})
        except Documento.DoesNotExist:
            return Response({'error': 'Documento no encontrado.'}, status=404)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
