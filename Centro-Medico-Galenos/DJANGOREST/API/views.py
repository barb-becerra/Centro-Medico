from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from API.serializers import (UsuarioSerializer, PerfilSerializer, agendaMedicaSerializer, AtencionSerializer, ExamenSerializer, centroMedicoSerializer, EspecialidadSerializer, ComisionSerializer, RecaudacionSerializer)
from API.models import (Usuario, Perfil, agendaMedica, Atencion, Examen, centroMedico, Especialidad, Comision, Recaudacion) 

# Create your views here.

@api_view(['GET','POST', 'PUT','DELETE'])
def UsuarioCRUD(request, id=None):
    if id:
        try:
            usuario = Usuario.objects.get(id=id)
            usuario_serializer = UsuarioSerializer(usuario)
            if request.method == 'GET':
                if id:
                    return Response(usuario_serializer.data)            
            elif request.method == 'PUT':
                usuario_serializer = UsuarioSerializer(usuario, data=request.data)
                if usuario_serializer.is_valid():
                    usuario_serializer.save()
                    return Response(usuario_serializer.data)
                else:
                    return Response(usuario_serializer.errors)

            elif request.method == 'DELETE':
                usuario.delete()
                return Response("Usuario Borrado")
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        usuarios_serializer = UsuarioSerializer(usuarios, many=True)
        return Response(usuarios_serializer.data)

    elif request.method == 'POST':
        usuarioSerializer = UsuarioSerializer(data=request.data)
        if usuarioSerializer.is_valid():
            usuarioSerializer.save()
            return Response(usuarioSerializer.data, status=status.HTTP_201_CREATED)
        return Response(usuarioSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST', 'PUT','DELETE'])
def PerfilCRUD(request, id=None):
    if id:
        try:
            perfil = Perfil.objects.get(id=id)
            perfil_serializer = PerfilSerializer(perfil)
            if request.method == 'GET':
                if id:
                    return Response(perfil_serializer.data)            
            elif request.method == 'PUT':
                perfil_serializer = PerfilSerializer(perfil, data=request.data)
                if perfil_serializer.is_valid():
                    perfil_serializer.save()
                    return Response(perfil_serializer.data)
                else:
                    return Response(perfil_serializer.errors)

            elif request.method == 'DELETE':
                perfil.delete()
                return Response("Perfil Borrado")
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        perfiles = Perfil.objects.all()
        perfiles_serializer = PerfilSerializer(perfiles, many=True)
        return Response(perfiles_serializer.data)

    elif request.method == 'POST':
        perfil_serializer = PerfilSerializer(data=request.data)
        if perfil_serializer.is_valid():
            perfil_serializer.save()
            return Response(perfil_serializer.data, status=status.HTTP_201_CREATED)
        return Response(perfil_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST', 'PUT','DELETE'])
def ExamenCRUD(request, id=None):
    if id:
        try:
            examen = Examen.objects.get(id=id)
            examen_serializer = ExamenSerializer(examen)
            if request.method == 'GET':
                if id:
                    return Response(examen_serializer.data)            
            elif request.method == 'PUT':
                examen_serializer = ExamenSerializer(examen, data=request.data)
                if examen_serializer.is_valid():
                    examen_serializer.save()
                    return Response(examen_serializer.data)
                else:
                    return Response(examen_serializer.errors)

            elif request.method == 'DELETE':
                examen.delete()
                return Response("Examen Borrado")
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        examenes = Examen.objects.all()
        examenes_serializer = ExamenSerializer(examenes, many=True)
        return Response(examenes_serializer.data)

    elif request.method == 'POST':
        examen_serializer = ExamenSerializer(data=request.data)
        if examen_serializer.is_valid():
            examen_serializer.save()
            return Response(examen_serializer.data, status=status.HTTP_201_CREATED)
        return Response(examen_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST', 'PUT','DELETE'])
def CMCRUD(request, id=None):
    if id:
        try:
            cm = centroMedico.objects.get(id=id)
            cm_serializer = centroMedicoSerializer(examen)
            if request.method == 'GET':
                if id:
                    return Response(cm_serializer.data)            
            elif request.method == 'PUT':
                cm_serializer = centroMedicoSerializer(cm, data=request.data)
                if cm_serializer.is_valid():
                    cm_serializer.save()
                    return Response(cm_serializer.data)
                else:
                    return Response(cm_serializer.errors)

            elif request.method == 'DELETE':
                cm.delete()
                return Response("Centro Medico Borrado")
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        centros = centroMedico.objects.all()
        centros_serializer = centroMedicoSerializer(centros, many=True)
        return Response(centros_serializer.data)

    elif request.method == 'POST':
        cm_serializer = centroMedicoSerializer(data=request.data)
        if cm_serializer.is_valid():
            cm_serializer.save()
            return Response(cm_serializer.data, status=status.HTTP_201_CREATED)
        return Response(cm_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST', 'PUT','DELETE'])
def EspecialidadCRUD(request, id=None):
    if id:
        try:
            espec = Especialidad.objects.get(id=id)
            espec_serializer = EspecialidadSerializer(examen)
            if request.method == 'GET':
                if id:
                    return Response(espec_serializer.data)            
            elif request.method == 'PUT':
                espec_serializer = EspecialidadSerializer(espec, data=request.data)
                if espec_serializer.is_valid():
                    espec_serializer.save()
                    return Response(espec_serializer.data)
                else:
                    return Response(espec_serializer.errors)

            elif request.method == 'DELETE':
                espec.delete()
                return Response("Especialidad Borrada")
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        especs = Especialidad.objects.all()
        especs_serializer = EspecialidadSerializer(especs, many=True)
        return Response(especs_serializer.data)

    elif request.method == 'POST':
        espec_serializer = EspecialidadSerializer(data=request.data)
        if cm_seriespec_serializeralizer.is_valid():
            espec_serializer.save()
            return Response(espec_serializer.data, status=status.HTTP_201_CREATED)
        return Response(espec_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class EspecialidadCRUD(APIView):
    def get(self, request, id=None):
        if id:
            espec = Especialidad().objects.get(id=id)
            espec_serializer = EspecialidadSerializer(espec)
            return Response(espec_serializer.data)

        especs = Especialidad.objects.all()
        especs_serializer = EspecialidadSerializer(especs, many=True)
        return Response(especs_serializer.data)

    def post(self, request):
        espec_serializer = EspecialidadSerializer(data=request.data)
        if espec_serializer.is_valid():
            espec_serializer.save()
            return Response(espec_serializer.data, status=status.HTTP_201_CREATED)
        return Response(espec_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id=None):
        espec = Especialidad.objects.get(id=id)
        espec_serializer = EspecialidadSerializer(cm, data=request.data)
        if espec_serializer.is_valid():
            espec_serializer.save()
            return Response(espec_serializer.data)
        else:
            return Response(espec_serializer.errors)

    def delete(self, request, id=None):
        espec = Especialidad.objects.get(id=id)
        espec.delete()
        return Response("Usuario Borrado")
