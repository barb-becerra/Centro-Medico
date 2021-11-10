from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, authentication
from API.serializers import (UsuarioSerializer, PerfilSerializer, agendaMedicaSerializer, AtencionSerializer, ExamenSerializer, centroMedicoSerializer, EspecialidadSerializer, ComisionSerializer, RecaudacionSerializer)
from API.models import (Usuario, Perfil, agendaMedica, Atencion, Examen, centroMedico, Especialidad, Comision, Recaudacion) 

# Create your views here.

class UsuarioCRUD(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, id=None):
        try:
            if id:
                usuario = Usuario.objects.get(id=id)
                usuario_serializer = UsuarioSerializer(usuario)
                return Response(usuario_serializer.data)

            usuarios = Usuario.objects.all()
            usuarios_serializer = UsuarioSerializer(usuarios, many=True)
            return Response(usuarios_serializer.data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        usuarioSerializer = UsuarioSerializer(data=request.data)
        if usuarioSerializer.is_valid():
            usuarioSerializer.save()
            return Response(usuarioSerializer.data, status=status.HTTP_201_CREATED)
        return Response(usuarioSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        try:
            usuario = Usuario.objects.get(id=id)
            usuario_serializer = UsuarioSerializer(usuario, data=request.data)
            if usuario_serializer.is_valid():
                usuario_serializer.save()
                return Response(usuario_serializer.data)
            else:
                return Response(usuario_serializer.errors)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id=None):
        try:
            usuario = Usuario.objects.get(id=id)
            usuario.delete()
            return Response("Usuario Borrado")
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

class PerfilCRUD(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, id=None):
        try:
            if id:
                perfil = Perfil.objects.get(id=id)
                perfil_serializer = PerfilSerializer(perfil)
                return Response(perfil_serializer.data)

            perfiles = Perfil.objects.all()
            perfiles_serializer = PerfilSerializer(perfiles, many=True)
            return Response(perfiles_serializer.data)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        perfilSerializer = PerfilSerializer(data=request.data)
        if perfilSerializer.is_valid():
            perfilSerializer.save()
            return Response(perfilSerializer.data, status=status.HTTP_201_CREATED)
        return Response(perfilSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        try:
            perfil = Perfil.objects.get(id=id)
            perfil_serializer = PerfilSerializer(perfil, data=request.data)
            if perfil_serializer.is_valid():
                perfil_serializer.save()
                return Response(perfil_serializer.data)
            else:
                return Response(perfil_serializer.errors)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id=None):
        try:
            perfil = Perfil.objects.get(id=id)
            perfil.delete()
            return Response("Usuario Borrado")
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
class ExamenCRUD(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, id=None):
        try:
            if id:
                examen = Examen.objects.get(id=id)
                examen_serializer = ExamenSerializer(examen)
                return Response(examen_serializer.data)

            examenes = Examen.objects.all()
            examenes_serializer = PerfilSerializer(examenes, many=True)
            return Response(examenes_serializer.data)   
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        examen_serializer = ExamenSerializer(data=request.data)
        if examen_serializer.is_valid():
            examen_serializer.save()
            return Response(examen_serializer.data, status=status.HTTP_201_CREATED)
        return Response(examen_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        try:
            examen = Examen.objects.get(id=id)
            examen_serializer = ExamenSerializer(examen, data=request.data)
            if examen_serializer.is_valid():
                examen_serializer.save()
                return Response(examen_serializer.data)
            else:
                return Response(examen_serializer.errors)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id=None):
        try:
            examen = Examen.objects.get(id=id)
            examen.delete()
            return Response("Usuario Borrado")
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
class centroMedicoCRUD(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, id=None):
        try:
            if id:
                cm = centroMedico().objects.get(id=id)
                cm_serializer = centroMedicoSerializer(cm)
                return Response(cm_serializer.data)

            centros = centroMedico.objects.all()
            centros_serializer = centroMedicoSerializer(centros, many=True)
            return Response(centros_serializer.data)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
    def post(self, request):
        cm_serializer = centroMedicoSerializer(data=request.data)
        if cm_serializer.is_valid():
            cm_serializer.save()
            return Response(cm_serializer.data, status=status.HTTP_201_CREATED)
        return Response(cm_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        try:
            cm = centroMedico.objects.get(id=id)
            cm_serializer = centroMedicoSerializer(cm, data=request.data)
            if cm_serializer.is_valid():
                cm_serializer.save()
                return Response(cm_serializer.data)
            else:
                return Response(cm_serializer.errors)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, id=None):
        try:
            cm = centroMedico.objects.get(id=id)
            cm.delete()
            return Response("Usuario Borrado")
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
class EspecialidadCRUD(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, id=None):
        try:
            if id:
                espec = Especialidad().objects.get(id=id)
                espec_serializer = EspecialidadSerializer(espec)
                return Response(espec_serializer.data)

            especs = Especialidad.objects.all()
            especs_serializer = EspecialidadSerializer(especs, many=True)
            return Response(especs_serializer.data)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        espec_serializer = EspecialidadSerializer(data=request.data)
        if espec_serializer.is_valid():
            espec_serializer.save()
            return Response(espec_serializer.data, status=status.HTTP_201_CREATED)
        return Response(espec_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None):
        try:
            espec = Especialidad.objects.get(id=id)
            espec_serializer = EspecialidadSerializer(cm, data=request.data)
            if espec_serializer.is_valid():
                espec_serializer.save()
                return Response(espec_serializer.data)
            else:
                return Response(espec_serializer.errors)
        except:
            Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id=None):
        try:
            espec = Especialidad.objects.get(id=id)
            espec.delete()
            return Response("Usuario Borrado")
        except:
            Response(status=status.HTTP_404_NOT_FOUND)
