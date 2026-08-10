from django.shortcuts import render

def home_view(request):
    return render(request, 'myapp/home.html')

def about_view(request):
    return render(request, 'myapp/about.html')