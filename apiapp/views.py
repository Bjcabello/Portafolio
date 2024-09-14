from rest_framework import viewsets
from .models import Profile, Skill, SocialLink, Project, Inquiry
from .serializers import ProfileSerializer, SkillSerializer, SocialLinkSerializer, ProjectSerializer, InquirySerializer
from django.core.mail import send_mail
from django.conf import settings

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def perform_create(self, serializer):
        # Guardar el Inquiry en la base de datos
        inquiry = serializer.save()

        # Datos de la consulta
        subject = f'Nueva consulta: {inquiry.subject}'
        message = f'Nombre: {inquiry.name}\nCorreo: {inquiry.email}\n\nMensaje:\n{inquiry.message}'
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = ['bjcabello55@gmail.com']  # Pon tu correo aquí

        # Enviar el correo
        send_mail(subject, message, from_email, recipient_list)
