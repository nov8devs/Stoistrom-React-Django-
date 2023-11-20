from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import JournalViewSet, JournalPageViewSet


journal_router = DefaultRouter()
journal_router.register(r'journal', JournalViewSet)
journal_router.register(r'journal_page', JournalPageViewSet)