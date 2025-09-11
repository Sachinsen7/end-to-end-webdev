# main controller

from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("hello world homepage")

    return render(request, "website/index.html")


def about(request):
    return HttpResponse("hello world aboutpage")


def contact(request):
    return HttpResponse("hello world contactpage")


