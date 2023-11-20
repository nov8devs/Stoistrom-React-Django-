from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Journal(models.Model):
    TYPES = [
        ('0', 'Empty Page'),
        ('1', "Random Prompt"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    journal_type = models.CharField(max_length=2, choices=TYPES)
    date_completed = models.DateTimeField(auto_now_add=True)
    

class JournalPage(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE)
    prompt = models.CharField(max_length=120)
    entry = models.TextField(null=True)
    image = models.ImageField(null=True)
