from rest_framework import serializers
from ..models import Journal, JournalPage


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'user', 'journal_type', 'date_completed']


class JournalPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalPage
        fields = ['id', 'prompt', 'entry', 'image']


# Handling POST requests from our Frontend
class CreateJournalPage(serializers.ModelSerializer):
    class Meta:
        model = JournalPage
        fields = ['prompt', 'entry']
