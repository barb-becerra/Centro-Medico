from django.urls import path
from API.views import UsuarioAPIView

urlpatterns = [
    path('usuarios/', UsuarioAPIView.as_view(), name="Usuarios_API"),
    path('usuarios/<int:id>', UsuarioAPIView.as_view(), name="Usuarios_API")
]