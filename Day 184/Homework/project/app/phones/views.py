from django.shortcuts import render, get_object_or_404, redirect
from .models import Phone

# 1. ყველა ტელეფონის სია
def phone_list(request):
    phones = Phone.objects.all()
    return render(request, 'phones/phone_list.html', {'phones': phones})

# 2. კონკრეტული ტელეფონის დეტალები
def phone_detail(request, id):
    phone = get_object_or_404(Phone, id=id)
    return render(request, 'phones/phone_detail.html', {'phone': phone})

# 3. ტელეფონის წაშლა
def phone_delete(request, id):
    phone = get_object_or_404(Phone, id=id)
    if request.method == "POST":
        phone.delete()
        return redirect('phone_list')
    return redirect('phone_detail', id=id)