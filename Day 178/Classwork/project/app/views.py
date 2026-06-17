from django.shortcuts import render
from django.http import HttpResponse

CARS_DATA = {
    'bmw': {
        'e39': 'BMW E39, რომელიც გამოდიოდა 1995-2004 წლებში',
        'm3': 'BMW M3 - ავტომობილის მე-3 სერია',
        'm8': 'BMW M8 - ძლიერი და V8 ბიტურბო ძრავით'
    },
    'mercedes': {
        'e63': 'Mercedes E63 - ბიზნეს კლასის სედანი',
        's63': 'Mercedes S63 - უმაღლესი კომფორტი',
        'g63': 'Mercedes G63 - დახვეწილი დიზაინით'
    },
    'audi': {
        'rs6': 'Audi RS6 - ერთ-ერთი ყველაზე სწრაფი აბტომობილი',
        'r8': 'Audi R8 - V10 ძრავით.',
        'q7': 'Audi Q7 - კომფორტული დიზაინით'
    }
}

def brand_page(request, brand_name):
    brand = brand_name.lower()
    
    if brand in CARS_DATA:
        models = CARS_DATA[brand].keys()

        return HttpResponse("<h1>{brand_name.upper()} მოდელები:</h1><p>models</p>")

def model_page(request, brand_name, model_name):
    brand = brand_name.lower()
    model = model_name.lower()
    
    if brand in CARS_DATA and model in CARS_DATA[brand]:
        info = CARS_DATA[brand][model]
        return HttpResponse("<h1>{brand_name.upper()} {model_name.upper()}</h1>"
        "<p>{info}</p>"
        "<a href='/{brand}'</a>")