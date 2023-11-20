from rest_framework.routers import DefaultRouter
from journaling.api.urls import journal_router
from django.urls import path, include


router = DefaultRouter()
router.registry.extend(journal_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]