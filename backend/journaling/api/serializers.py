from rest_framework import serializers
from ..models import Journal, JournalPage


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'name', 'journal_type', 'date_started', 'date_last_edited']


class JournalPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalPage
        fields = ['id', 'prompt', 'entry', 'image']


# Handling POST requests from our Frontend
class CreateJournal(serializers.ModelSerializer):
    journal_type = serializers.CharField()
    class Meta:
        model = Journal
        fields = ['name', 'journal_type']

class CreateJournalPage(serializers.ModelSerializer):
    journal_id = serializers.IntegerField()
    class Meta:
        model = JournalPage
        fields = ['journal_id', 'prompt', 'entry']
