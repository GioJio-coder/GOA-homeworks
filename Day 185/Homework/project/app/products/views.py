from django.shortcuts import render, redirect
from .forms import ProductForm

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()  # ინახავს ახალ პროდუქტს ბაზაში
            return redirect('add_product')  # წარმატების შემდეგ გადამისამართება იმავე გვერდზე
    else:
        form = ProductForm()

    return render(request, 'products/add_product.html', {'form': form})