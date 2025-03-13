from django.shortcuts import render
from rest_framework import generics
from .models import History, Bookmark
from .serializers import HistorySerializer, BookmarkSerializer

class HistoryListCreate(generics.ListCreateAPIView):
    queryset = History.objects.all().order_by('-added_at')
    serializer_class = HistorySerializer

class BookmarkListCreate(generics.ListCreateAPIView):
    queryset = Bookmark.objects.all().order_by('added_at')
    serializer_class = BookmarkSerializer

