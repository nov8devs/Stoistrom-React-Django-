from rest_framework import serializers
from ..models import Journal, JournalPage

class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'journal_type', 'date_started', 'date_last_edited']


class JournalPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalPage
        fields = ['id', 'journal', 'prompt', 'entry', 'image']

# Handling POST requests from our Frontend
class CreateJournal(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['journal_type']

class CreateJournalPage(serializers.ModelSerializer):
    journal_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = JournalPage
        fields = ['journal_id', 'prompt', 'entry']
