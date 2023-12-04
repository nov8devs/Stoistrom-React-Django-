from django.db import models

# Create your models here.
class JournalType(models.Model):
    name = models.CharField(max_length=25, default='Empty Page')
    description = models.TextField(null=False)


class Journal(models.Model):
    name = models.CharField(max_length=50, default='Journal')
    journal_type = models.ForeignKey(JournalType, on_delete=models.CASCADE, null=True)
    date_started = models.DateTimeField(auto_now_add=True)
    date_last_edited = models.DateTimeField(auto_now=True)

class JournalPage(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE, null=True)
    prompt = models.CharField(max_length=120, blank=False)
    entry = models.TextField(null=True)
    image = models.ImageField(null=True)
