from django.db import models

# Create your models here.
class Perfil(models.Model):
    id = id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Especialidad(models.Model):
    id = id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=80)

    def __str__(self):
        return self.nombre

class centroMedico(models.Model):
    id = id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
class Usuario(models.Model):
    id = models.IntegerField(primary_key=True)
    pwd = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    rut = models.CharField(max_length=12)
    perfil = models.ForeignKey(to=Perfil, on_delete=models.CASCADE, blank=True, null=True)
    especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE, blank=True, null=True)
    cm = models.ForeignKey(centroMedico, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.nombre

class agendaMedica(models.Model):
    id = id = models.IntegerField(primary_key=True)

    def __str__(self):
        return self.id

class Atencion(models.Model):
    id = id = models.IntegerField(primary_key=True)
    fecha = models.DateTimeField()

    def __str__(self):
        return self.id

class Examen(models.Model):
    id = id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField() 

    def __str__(self):
        return self.nombre

class Comision(models.Model):
    id = id = models.IntegerField(primary_key=True)
    fechaVencimiento = models.DateTimeField()
    rangoFecha = models.DateTimeField()

    def __str__(self):
        return self.id

class Recaudacion(models.Model):
    id = id = models.IntegerField(primary_key=True)
    totalPago = models.IntegerField()

    def __str__(self):
        return self.id
