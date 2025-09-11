from django.urls import path
from . import views


urlpatterns = [
    path("", views.albus, name='all_albus'),
    

]