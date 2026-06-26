from django.http import HttpResponse, Http404
from django.shortcuts import render

cars_database = [
    {'id': 0, 'brand': 'bmw', 'model': 'm3', 'color': 'black', 'year': 2024},
    {'id': 1, 'brand': 'mercedes', 'model': 'c63', 'color': 'silver', 'year': 2023},
    {'id': 2, 'brand': 'audi', 'model': 'rs6', 'color': 'gray', 'year': 2025},
]

def car_list(request):
    items = "".join(["<li><a href='/cars/{c['brand']}-{c['model']}/'>{c['brand'].upper()} {c['model'].replace('-', ' ').title()}</a></li>" for c in cars_database])
    return HttpResponse("<h1>Cars List</h1>")

def car_detail_redirect(request, car_title):
    return render(f'/product/{car_title}/')

def car_detail(request, car_title):
    car = next((c for c in cars_database if f"{c['brand']}-{c['model']}".lower() == car_title.lower()), None)
    if not car:
        raise Http404("Car not found")
        
    return HttpResponse("""
        <h1>{car['brand'].upper()} {car['model'].replace('-', ' ').title()}</h1>
        <p><b>Color:</b> {car['color']}</p>
        <p><b>Year:</b> {car['year']}</p><br>
        <a href='/cars/'>Back to list</a>
    """)