from rest_framework import serializers
from ..models import Habit

class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ['id', 'name', 'description', 'good_habit', 'date_started', 'date_last_checked']


class HabitCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ['name', 'description', 'good_habit']