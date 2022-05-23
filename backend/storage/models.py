from django.db import models

from . import types

# Create your models here.
class POAPModel(models.Model):
    
    title = models.CharField(max_length=128)
    
    organizer = models.CharField(max_length=128)
    
    start_time = models.DateTimeField()
    
    end_time = models.DateTimeField(null=True)
    
    media = models.URLField()
    
    media_type = models.IntegerField(choices=types.MediaType.choices())
    
    contract_address = models.CharField(max_length=42)
    
    event_type =  models.IntegerField(choices=types.EventType.choices())
    
    status = models.BooleanField(default=True)