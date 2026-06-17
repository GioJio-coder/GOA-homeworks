from django.shortcuts import render

products_database = [
    {'id': 0, 'title': 'ზანგის ღიმილი', 'price': 5.99},
    {'id': 1, 'title': 'შოკოლადის ტორტი', 'price': 12.50},
    {'id': 2, 'title': 'ცივი ყავა', 'price': 4.50},
    {'id': 3, 'title': 'ხილის ასორტი', 'price': 8.99},
    {'id': 4, 'title': 'მწვანე ჩაი', 'price': 3.20}
]

def all_products(request):
    context = {'products': products_database}
    return render(request, 'products/all_products.html', context)

def product_detail(request, product_id):
    product = next((p for p in products_database if p['id'] == product_id), None)
    if product is None:
        raise("პროდუქტი ვერ მოიძებნა")
    
    context = {'product': product}
    return render(request, 'products/product_detail.html', context)