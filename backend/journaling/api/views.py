from rest_framework import viewsets, status
from ..models import Journal, JournalPage
from .serializers import JournalSerializer, JournalPageSerializer, CreateJournalPage
from rest_framework.response import Response
from rest_framework.views import APIView


class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer


class JournalPageViewSet(viewsets.ModelViewSet):
    queryset = JournalPage.objects.all()
    serializer_class = JournalPageSerializer


#Handling POST requests from frontend.
class CreateJournalPageView(APIView):
    serializer_class = CreateJournalPage

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            prompt = serializer.data.get("prompt")
            entry = serializer.data.get("entry")
            journal_page = JournalPage.objects.create(prompt=prompt, entry=entry)
            journal_page.save()
            return Response(JournalPageSerializer(journal_page).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
