from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import UserUpdateForm

# 1. Logout ფუნქციონალი
def user_logout(request):
    logout(request)
    messages.info(request, "თქვენ წარმატებით გამოხვედით სისტემიდან.")
    return redirect('login')  # ან 'home' / თქვენი სასურველი გვერდი

# 2. პროფილის დათვალიერება (მხოლოდ ავტორიზებული მომხმარებლისთვის)
@login_required
def profile_view(request):
    return render(request, 'users/profile.html', {'user': request.user})

# 3. პროფილის რედაქტირება
@login_required
def edit_profile(request):
    if request.method == 'POST':
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, "პროფილის მონაცემები წარმატებით განახლდა!")
            return redirect('profile')
    else:
        form = UserUpdateForm(instance=request.user)

    return render(request, 'users/edit_profile.html', {'form': form})