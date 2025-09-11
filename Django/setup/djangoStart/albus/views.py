from django.shortcuts import render

# Create your views here.


def albus(request):
    return render(request, 'albus/all_albus.html')