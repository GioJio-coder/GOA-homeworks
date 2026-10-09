from django.shortcuts import render, redirect
from .forms import RegisterForm, PostAddForm

def register_user(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_login')
    else:
        form = RegisterForm()
    
    return render(request, 'users_registration.html', {'register_form': form})

def add_post(request):
    if request.method == 'POST':
        form = PostAddForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('post_list')
    else:
        form = PostAddForm()

    return render(request, 'add_post.html', {'post_form': form})