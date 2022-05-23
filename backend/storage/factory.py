import factory
from . import models

from random import randint

class POAPFactory(factory.django.DjangoModelFactory):
    
    class Meta:
        model = models.POAPModel

    title = "Sample Event for Demonstration"
    
    organizer = factory.Faker('company')
    
    start_time = factory.Faker('date_time')
    
    end_time = factory.Faker('date_time')
    
    media = "https://random.imagecdn.app/500/500"
    
    media_type = randint(0, 1)
    
    contract_address = "0x0000000000000000000000000000000000000000"
    
    event_type = randint(0,2)
