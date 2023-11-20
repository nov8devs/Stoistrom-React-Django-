from django.contrib import admin
from .models import Journal, JournalPage

# Register your models here.
admin.site.register(Journal)
admin.site.register(JournalPage)
