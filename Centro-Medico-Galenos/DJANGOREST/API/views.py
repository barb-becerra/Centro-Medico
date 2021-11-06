from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from API.serializers import (UsuarioSerializer, PerfilSerializer, agendaMedicaSerializer, AtencionSerializer, ExamenSerializer, centroMedicoerializer, EspecialidadSerializer, ComisionSerializer, RecaudacionSerializer)
from API.models import (Usuario, Perfil, agendaMedica, Atencion, Examen, centroMedico, Especialidad, Comision, Recaudacion) 

# Create your views here.

class UsuarioAPIView(APIView):
    def get(self, request, id=None):
        if id:
            usuario = Usuario.objects.get(id=id)
            usuario_serializer = UsuarioSerializer(usuario)
            return Response(usuario_serializer.data)

        usuarios = Usuario.objects.all()
        usuarios_serializer = UsuarioSerializer(usuarios, many=True)
        return Response(usuarios_serializer.data)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id=None):
        usuario = Usuario.objects.get(id=id)
        usuario_serializer = UsuarioSerializer(usuario, data=request.data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return Response(usuario_serializer.data)
        else:
            return Response(usuario_serializer.errors)

    def delete(self, request, id=None):
        usuario = Usuario.objects.get(id=id)
        usuario.delete()
        return Response("Usuario Borrado")
