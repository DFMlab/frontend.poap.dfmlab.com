from django.urls import path

from . import views

urlpatterns = [
    path('poaps/', views.POAPListView.as_view())
]
