from django.urls import path
from .views import HistoryListCreate, BookmarkListCreate

urlpatterns = [
    path('history/', HistoryListCreate.as_view(), name='history'),
    path('bookmarks/', BookmarkListCreate.as_view(), name='bookmark'),
]

