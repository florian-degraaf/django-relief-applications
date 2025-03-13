from django.db import models

class History(models.Model):
    video_id = models.CharField(max_length=255, unique=True)
    added_at = models.DateTimeField(auto_now_add=True)

class Bookmark(models.Model):
    video_id = models.CharField(max_length=255, unique=True)
    added_at = models.DateTimeField(auto_now_add=True)
