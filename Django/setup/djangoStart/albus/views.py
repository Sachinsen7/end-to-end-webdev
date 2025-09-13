from django.shortcuts import render
from .models import ChaiVarity
from django.shortcuts import get_object_or_404
# Create your views here.


def albus(request):
    teas = ChaiVarity.objects.all()
    return render(request, 'albus/all_albus.html', {'teas': teas})


def tea_details(request, tea_id):
    tea = get_object_or_404(ChaiVarity, pk=tea_id)
    return render(request, 'albus/tea_details.html', {'tea': tea})