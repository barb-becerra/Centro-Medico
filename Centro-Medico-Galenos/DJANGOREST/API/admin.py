from django.contrib import admin
from .models import (Usuario, Perfil, agendaMedica, Atencion, Examen, centroMedico, Especialidad, Comision, Recaudacion)

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Perfil)
admin.site.register(agendaMedica)
admin.site.register(Atencion)
admin.site.register(Examen)
admin.site.register(centroMedico)
admin.site.register(Especialidad)
admin.site.register(Comision)
admin.site.register(Recaudacion)