from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JournalViewSet, JournalPageViewSet, CreateJournalPageView, CreateJournalView, ListJournalView


journal_router = DefaultRouter()
journal_router.register(r'journal', JournalViewSet)
journal_router.register(r'journal_page', JournalPageViewSet)


# All the backend endpoints, starting with api/{endpoint}
urlpatterns = [
    path('', include(journal_router.urls)),
    path('create/', CreateJournalPageView.as_view()),
    path('create_journal/', CreateJournalView.as_view()),
    path('list_journals/', ListJournalView.as_view())
]
