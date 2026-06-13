from django.shortcuts import render
from django.http import HttpResponse

def user_list(request):
    return HttpResponse("ყველა user-ის ინფორმაცია")

def user_delete(request):
    return HttpResponse("user წაიშალა")

def user_add(request):
    return HttpResponse("user დაემატა")

def user_edit(request):
    return HttpResponse("user შეიცვალა")