from rest_framework import viewsets, status
from ..models import Journal, JournalPage
from .serializers import JournalSerializer, JournalPageSerializer, CreateJournalPage, CreateJournal
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView

# Backend Viewsets
class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer

class JournalPageViewSet(viewsets.ModelViewSet):
    queryset = JournalPage.objects.all()
    serializer_class = JournalPageSerializer


# Handling POST requests from frontend.
class CreateJournalPageView(APIView):
    serializer_class = CreateJournalPage

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            journal_id = serializer.validated_data.get("journal_id")
            prompt = serializer.validated_data.get("prompt")
            entry = serializer.validated_data.get("entry")
            journal = Journal.objects.get(id=int(journal_id))
            journal_page = JournalPage.objects.create(journal=journal, prompt=prompt, entry=entry)
            journal_page.save()
            return Response(JournalPageSerializer(journal_page).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class CreateJournalView(APIView):
    serializer_class = CreateJournal

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            journal_type = serializer.validated_data.get("journal_type")
            journal = Journal.objects.create(journal_type=journal_type)
            journal.save()
            return Response(JournalSerializer(journal).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


# Sending responses to Frontend
class ListJournalView(ListAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer
