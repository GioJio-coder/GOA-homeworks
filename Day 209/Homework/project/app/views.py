from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import RegistrationForm

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password']) # პაროლის ჰეშირება
            user.is_active = False  # Email verification-ისთვის დროებით ვთიშავთ აქტივაციას
            user.save()
            
            # აქ შეგიძლიათ ჩართოთ Email Verification და 2-Step Verification გენერაცია
            return redirect('login_url')
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})