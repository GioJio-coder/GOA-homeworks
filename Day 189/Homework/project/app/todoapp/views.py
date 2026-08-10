from django.shortcuts import render, redirect
from .utils import get_all_todos, add_todo, delete_todo

# 1. ყველა Todo-ს გამოჩენის view
def todo_list(request):
    todos = get_all_todos()  # utils ფუნქციის გამოყენება
    return render(request, 'todoapp/todo_list.html', {'todos': todos})


# 2. ახალი Todo-ს დამატების view
def create_todo(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description', '')
        
        if title:
            add_todo(title=title, description=description)  # utils ფუნქციის გამოყენება
            return redirect('todo_list')
            
    return render(request, 'todoapp/create_todo.html')


# 3. Todo-ს წაშლის view
def remove_todo(request, todo_id):
    delete_todo(todo_id)  # utils ფუნქციის გამოყენება
    return redirect('todo_list')