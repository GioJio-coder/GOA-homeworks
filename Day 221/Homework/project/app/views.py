from django.shortcuts import render, redirect
from django.contrib.auth import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from .models import Task

# რეგისტრაცია
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('task_list')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

# Task-ების სია და დამატება
@login_required
def task_list(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        if title:
            Task.objects.create(user=request.user, title=title)
        return redirect('task_list')

    # მოგვაქვს მხოლოდ Task-ები
    tasks = Task.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'tasks/task_list.html', {'tasks': tasks})

# პროფილის გვერდი
@login_required
def profile(request):
    user_tasks_count = Task.objects.filter(user=request.user).count()
    completed_tasks_count = Task.objects.filter(user=request.user, completed=True).count()
    
    context = {
        'user': request.user,
        'total_tasks': user_tasks_count,
        'completed_tasks': completed_tasks_count,
    }
    return render(request, 'registration/profile.html', context)