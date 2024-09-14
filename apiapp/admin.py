from django.contrib import admin
from .models import Profile, Skill, SocialLink, Project, Inquiry

# Configuración para el modelo Inquiry (antes Contact)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'date_sent')
    list_display_links = ('name', 'email')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('date_sent',)

# Configuración para el modelo Profile
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'profession')
    search_fields = ('name', 'last_name', 'profession')

# Configuración para el modelo Skill
class SkillAdmin(admin.ModelAdmin):
    list_display = ('profile', 'name', 'level')
    search_fields = ('name',)

# Configuración para el modelo SocialLink
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('profile', 'platform_name', 'url')
    search_fields = ('platform_name',)

# Configuración para el modelo Project
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('profile', 'title', 'technologies', 'project_url')
    search_fields = ('title', 'technologies')

# Registro de los modelos
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(SocialLink, SocialLinkAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Inquiry, InquiryAdmin)
