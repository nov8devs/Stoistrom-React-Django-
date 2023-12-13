from rest_framework import viewsets, status
from ..models import Habit
from .serializers import HabitSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class HabitView(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


