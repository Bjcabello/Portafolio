from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=50, verbose_name='Nombre')
    last_name = models.CharField(max_length=50, verbose_name='Apellido')
    profession = models.CharField(max_length=100, verbose_name='Profesion')
    bio = RichTextField(verbose_name='Biografia')
    profile_picture = models.ImageField(upload_to='foto_perfil/', blank=True, null='True', verbose_name='Foto Perfil')

    class Meta:
        verbose_name = 'Perfil'
        verbose_name_plural = 'Perfiles'

    def __str__(self):
        return f'{self.name} {self.last_name}'

class Skill(models.Model):
    LEVEL_CHOICES = [
        ('BASICO', 'Básico'),
        ('INTERMEDIO', 'Intermedio'),
        ('AVANZADO', 'Avanzado'),
    ]
    
    profile = models.ForeignKey(Profile, related_name='skills', on_delete=models.CASCADE, verbose_name='Perfil')
    name = models.CharField(max_length=100, verbose_name='Nombre')
    level = models.CharField(max_length=10, choices=LEVEL_CHOICES, verbose_name='Nivel')
    icon_url = models.URLField(blank=True, null=True, verbose_name='Icono de la Habilidad')

    class Meta:
        verbose_name = 'Habilidad'
        verbose_name_plural = 'Habilidades'

    def __str__(self):
        return self.name

class SocialLink(models.Model):
    profile = models.ForeignKey(Profile, related_name='social_links', on_delete=models.CASCADE)
    platform_name = models.CharField(max_length=50, verbose_name='Plataforma')  
    icon_url_social= models.URLField(blank=True, null=True, verbose_name='Icono de Red Social')
    url = models.URLField()

    class Meta:
        verbose_name = 'Enlace'
        verbose_name_plural = 'Enlaces'

    def __str__(self):
        return self.platform_name


class Project(models.Model):
    profile = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Titulo')
    description = models.TextField(verbose_name="Descripcion")
    technologies = models.CharField(max_length=200, verbose_name='Tecnologias')
    project_url = models.URLField(blank=True, null=True, verbose_name='Url Proyecto')  
    
    class Meta:
        verbose_name ='Proyecto'
        verbose_name_plural = 'Proyectos'

    def __str__(self):
        return self.title


class Inquiry(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nombre')
    email = models.EmailField(verbose_name='Correo')
    subject = models.CharField(max_length=200, verbose_name='Asunto')
    message = models.TextField(verbose_name='Mensaje')
    date_sent = models.DateTimeField(auto_now_add=True, verbose_name='Fecha Envio')

    class Meta:
        verbose_name ='Consulta'
        verbose_name_plural = 'Consultas'

    def __str__(self):
        return f'{self.name} - {self.subject}'
    