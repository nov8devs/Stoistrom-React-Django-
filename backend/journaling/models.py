from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class JournalType(models.Model):
    name = models.CharField(max_length=25)
    description = models.CharField(max_length=100)

class Journal(models.Model):
    name = models.CharField(max_length=100, null=True)
    journal_type = models.ForeignKey(JournalType, on_delete=models.CASCADE)
    date_started = models.DateTimeField(auto_now_add=True)
    date_last_edited = models.DateTimeField(auto_now=True)
    

class JournalPage(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE)
    prompt = models.CharField(max_length=450)
    entry = models.TextField(null=True)
    image = models.ImageField(null=True)
