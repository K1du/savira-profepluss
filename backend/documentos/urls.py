from django.urls import path
from .views import DocumentoListCreateView, DocumentoRetrieveDestroyView
from .views_ia import DocumentoResumenView, DocumentoTestView

urlpatterns = [
    path('documentos/', DocumentoListCreateView.as_view(), name='documento-list-create'),
    path('documentos/<int:pk>/', DocumentoRetrieveDestroyView.as_view(), name='documento-detail'),
    path('documento/<int:pk>/resumen/', DocumentoResumenView.as_view(), name='documento-resumen'),
    path('documento/<int:pk>/test/', DocumentoTestView.as_view(), name='documento-test'),
]
