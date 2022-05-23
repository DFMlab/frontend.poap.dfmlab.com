from enum import Enum

class EventType(Enum):
    
    PHYSICAL = 0
    
    VIRTUAL = 1
    
    HYBRID = 2
    
    @classmethod
    def choices(cls):
        return ((i.name, i.value) for i in cls)
    
    
class MediaType(Enum):
    
    IMAGE = 0
    
    VIDEO = 1
        
    @classmethod
    def choices(cls):
        return ((i.name, i.value) for i in cls)