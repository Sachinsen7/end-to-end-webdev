from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

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


#  one to many

class TeaReviews(models.Model):
    tea = models.ForeignKey(ChaiVarity, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f'{self.user.username} - {self.tea.name}'
    
# many to many 


class Store(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    chai_variety = models.ManyToManyField(ChaiVarity, related_name='stores')

    def __str__(self):
        return self.name
    
#  one to one 

class TeaCertificate(models.Model):
    tea = models.OneToOneField(ChaiVarity, on_delete=models.CASCADE, related_name='certificate')
    certificate_number = models.CharField(max_length=100)
    issued_date = models.DateTimeField(default=timezone.now)
    validate_until = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f'Certificate for {self.tea.name}'

    
