from rest_framework import serializers
from API.models import (Usuario, Perfil, agendaMedica, Atencion, Examen, centroMedico, Especialidad, Comision, Recaudacion) 

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario 
        fields = '__all__'

class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil 
        fields = '__all__'
        
class agendaMedicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = agendaMedica 
        fields = '__all__'

class AtencionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atencion 
        fields = '__all__'

class ExamenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examen 
        fields = '__all__'

class centroMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = centroMedico 
        fields = '__all__'

class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad 
        fields = '__all__'

class ComisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comision 
        fields = '__all__'

class RecaudacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recaudacion 
        fields = '__all__'
