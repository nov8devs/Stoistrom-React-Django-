from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HabitView

habit_router = DefaultRouter()
habit_router.register(r'habit', HabitView)

urlpatterns = [
    path('', include(habit_router.urls)),
]
