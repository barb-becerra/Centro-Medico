from django.urls import path
from API.views import UsuarioCRUD, PerfilCRUD, ExamenCRUD, CMCRUD, EspecialidadCRUD

urlpatterns = [
    path('usuarios/', UsuarioCRUD, name="Usuarios_API"),
    path('usuarios/<int:id>', UsuarioCRUD, name="Usuarios_API"),

    path('perfiles/', PerfilCRUD, name="Perfiles_API"),
    path('perfiles/<int:id>', PerfilCRUD, name="Perfiles_API"),

    path('examenes/', ExamenCRUD, name="Examenes_API"),
    path('examenes/<int:id>', ExamenCRUD, name="Examenes_API"),

    path('cm/', CMCRUD, name="CentrosMedicos_API"),
    path('cm/<int:id>', CMCRUD, name="CentrosMedicos_API"),

    path('especialidades/', EspecialidadCRUD, name="Especialidades_API"),
    path('especialidades/<int:id>', EspecialidadCRUD, name="Especialidades_API"),
]