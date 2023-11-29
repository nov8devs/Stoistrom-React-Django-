from django.db import models

# Create your models here.

class Journal(models.Model):
    TYPES = [
        ('0', 'Empty Page'),
        ('1', "Random Prompt"),
    ]

    journal_type = models.CharField(max_length=2, choices=TYPES, null=True)
    date_started = models.DateTimeField(auto_now_add=True)
    date_last_edited = models.DateTimeField(auto_now=True)

class JournalPage(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE, null=True)
    prompt = models.CharField(max_length=120, blank=False)
    entry = models.TextField(null=True)
    image = models.ImageField(null=True)
