from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, SkillViewSet, SocialLinkViewSet, ProjectViewSet, InquiryViewSet

# Creamos el router para registrar las vistas de las APIs
router = DefaultRouter()

# Registramos los viewsets con el router
router.register(r'profiles', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'social-links', SocialLinkViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'inquiries', InquiryViewSet)

# URL patterns
urlpatterns = [
    path('api/', include(router.urls)),  # Todas las rutas de la API estarán prefijadas con 'api/'
]
