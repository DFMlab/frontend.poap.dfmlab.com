# Create your views here.
from . import serializers
from rest_framework import generics
from rest_framework import filters

from . import models

from . import pagination

class POAPListView(generics.ListAPIView):
    
    queryset = models.POAPModel.objects.filter(status=True)
    
    serializer_class = serializers.POAPSerializer
    
    pagination_class = pagination.POAPPagination
    
    filter_backends = [filters.SearchFilter]
    
    search_fields = ('$title', '$organizer', '=event_type')