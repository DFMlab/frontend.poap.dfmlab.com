from rest_framework import serializers
from . import models

class POAPSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = models.POAPModel
        
        fields = '__all__'