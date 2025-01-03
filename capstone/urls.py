from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("crystal_mind.urls"))
    # path('', TemplateView.as_view(template_name="index.html")),
    # path('admin/', admin.site.urls),
    # path('register/', include("crystal_mind.urls")),  # Include the register path directly
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)