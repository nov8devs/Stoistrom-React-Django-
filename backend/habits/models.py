from django.db import models

# Create your models here.


class Habit(models.Model):
    name = models.CharField(max_length = 25)
    description = models.CharField(max_length = 125)
    good_habit = models.BooleanField(default = True)
    date_started = models.DateTimeField(auto_now_add=True)
    date_last_checked = models.DateTimeField(auto_now=True)