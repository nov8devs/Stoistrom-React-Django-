from rest_framework import viewsets, status
from ..models import Journal, JournalPage, JournalType
from .serializers import JournalSerializer, JournalPageSerializer, CreateJournalPage, CreateJournal
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView

# Backend Viewsets
class JournalViewSet(viewsets.ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer

    def create(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer.data)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class JournalPageViewSet(viewsets.ModelViewSet):
    queryset = JournalPage.objects.all()
    serializer_class = JournalPageSerializer

    def create(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer.data)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Handling POST requests from frontend.
# These will NOT be used in the future.
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
            _type = serializer.validated_data.get("journal_type_id")
            journal_type = JournalType.objects.get(id=int(_type))
            journal = Journal.objects.create(journal_type=journal_type)
            journal.save()
            return Response(JournalSerializer(journal).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


# Sending responses to Frontend
class ListJournalView(ListAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer
