from django.db import models
from django.utils import timezone

# Create your models here.
class ChaiVarity(models.Model):
    CHAI_TYPE_CHOICE = [
        ('Tea', 'Tea'),
        ('Coffee', 'Coffee'),
        ('Milk', 'Milk'),
    ]

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')
    date_added = models.DateTimeField(default=timezone.now)
    description = models.TextField(default='')


    type = models.CharField(max_length=20, choices=CHAI_TYPE_CHOICE)


    def __str__(self):
        return self.name


