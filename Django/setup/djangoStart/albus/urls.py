from django.urls import path
from . import views


urlpatterns = [
    path("", views.albus, name='all_albus'),
    path("<int:tea_id>/", views.tea_details, name='tea_details'),
]