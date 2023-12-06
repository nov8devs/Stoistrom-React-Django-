from rest_framework import viewsets, status
from ..models import Journal, JournalPage, JournalType
from .serializers import JournalSerializer, JournalPageSerializer, CreateJournalPage, CreateJournal
from rest_framework.response import Response
from rest_framework.views import APIView


class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer


class JournalPageViewSet(viewsets.ModelViewSet):
    queryset = JournalPage.objects.all()
    serializer_class = JournalPageSerializer


#Handling POST requests from frontend.

class CreateJournalView(APIView):
    serializer_class = CreateJournal

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        if serializer.is_valid():
            print("Valid data: ", serializer.validated_data)
            name = serializer.validated_data.get("name")
            journal_type_data = serializer.validated_data.get("journal_type")
            journal_type = JournalType.objects.get(name=journal_type_data)
            print(journal_type.name)
            journal = Journal.objects.create(name=name, journal_type=journal_type)
            journal.save()
            return Response(JournalSerializer(journal).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class CreateJournalPageView(APIView):
    serializer_class = CreateJournalPage

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        if serializer.is_valid():
            print("Valid data: ", serializer.validated_data)
            prompt = serializer.validated_data.get("prompt")
            entry = serializer.validated_data.get("entry")
            journal_id = serializer.validated_data.get("journal_id")
            journal = Journal.objects.get(id=journal_id)
            journal_page = JournalPage.objects.create(journal=journal, prompt=prompt, entry=entry)
            journal_page.save()
            return Response(JournalPageSerializer(journal_page).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
