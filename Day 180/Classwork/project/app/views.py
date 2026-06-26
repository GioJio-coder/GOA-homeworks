from django.shortcuts import render 
from django.http import Http404

products_database = [
    {'id': 0, 'title': 'ზანგის ღიმილი', 'price': 5.99},
    {'id': 1, 'title': 'მაგარი', 'price': 4.99},
    {'id': 2, 'title': 'ნამცხვარი', 'price': 7.99},
]

def product_list(request):
    context = {
        'products': products_database
    } 
    return render(request, 'products/product_list.html', context)

def product_detail(request, product_id):
    product = next((x for x in products_database if x['id'] == product_id) None)

    if product is None:
        raise Http404("პროდუქტი ვერ მოიძებნა")

    context = {
        'product': product
    }
    return render(request, 'products/product_detail.html', context)