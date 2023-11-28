from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JournalViewSet, JournalPageViewSet, CreateJournalPageView


journal_router = DefaultRouter()
journal_router.register(r'journal', JournalViewSet)
journal_router.register(r'journal_page', JournalPageViewSet)

urlpatterns = [
    path('', include(journal_router.urls)),
    path('create/', CreateJournalPageView.as_view())
]
