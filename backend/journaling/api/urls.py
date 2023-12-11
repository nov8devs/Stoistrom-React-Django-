from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JournalViewSet, JournalPageViewSet, CreateJournalPageView, CreateJournalView, DeleteJournalView


journal_router = DefaultRouter()
journal_router.register(r'journal', JournalViewSet)
journal_router.register(r'journal_page', JournalPageViewSet)

urlpatterns = [
    path('', include(journal_router.urls)),
    path('create_journal_page/', CreateJournalPageView.as_view()),
    path('create_journal/', CreateJournalView.as_view()),
    path('delete_journal/<int:journal_id>/', DeleteJournalView.as_view()),
]
