from rest_framework import viewsets, status
from ..models import Habit
from .serializers import HabitSerializer, HabitCreateUpdateSerializer
from rest_framework.response import Response

# Create your views here.

class HabitView(viewsets.ModelViewSet):
    queryset = Habit.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return HabitCreateUpdateSerializer
        else:
            return HabitSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
