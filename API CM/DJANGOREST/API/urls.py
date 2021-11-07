from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from API.views import UsuarioCRUD, PerfilCRUD, ExamenCRUD, centroMedicoCRUD, EspecialidadCRUD

urlpatterns = [
    path('usuarios/', UsuarioCRUD.as_view(), name="Usuarios_API"),
    path('usuarios/<int:id>', UsuarioCRUD.as_view(), name="Usuarios_API"),

    path('perfiles/', PerfilCRUD.as_view(), name="Perfiles_API"),
    path('perfiles/<int:id>', PerfilCRUD.as_view(), name="Perfiles_API"),

    path('examenes/', ExamenCRUD.as_view(), name="Examenes_API"),
    path('examenes/<int:id>', ExamenCRUD.as_view(), name="Examenes_API"),

    path('cm/', centroMedicoCRUD.as_view(), name="CentrosMedicos_API"),
    path('cm/<int:id>', centroMedicoCRUD.as_view(), name="CentrosMedicos_API"),

    path('especialidades/', EspecialidadCRUD.as_view(), name="Especialidades_API"),
    path('especialidades/<int:id>', EspecialidadCRUD.as_view(), name="Especialidades_API"),

    path('token/', obtain_auth_token, name="Token_Auth")
]