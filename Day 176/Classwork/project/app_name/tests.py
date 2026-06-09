from django.http import HttpResponse

def home(request):
    return HttpResponse("<p>Hello world!</p>")