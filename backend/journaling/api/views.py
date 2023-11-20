from rest_framework import viewsets
from ..models import Journal, JournalPage
from .serializers import JournalSerializer, JournalPageSerializer


class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer


class JournalPageViewSet(viewsets.ModelViewSet):
    queryset = JournalPage.objects.all()
    serializer_class = JournalPageSerializer
