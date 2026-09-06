from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect, render

from .forms import LoginForm, PostForm, RegisterForm
from .models import Post


# 1. Registration
def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "რეგისტრაცია წარმატებით დასრულდა!")
            return redirect("profile")
    else:
        form = RegisterForm()
    return render(request, "register.html", {"form": form})


# 2. Login
def login_view(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("profile")
            else:
                messages.error(request, "არასწორი მონაცემები!")
    else:
        form = LoginForm()
    return render(request, "login.html", {"form": form})


# 3. Authenticated User Profile
@login_required
def profile_view(request):
    user_posts = Post.objects.filter(author=request.user)
    return render(
        request, "profile.html", {"user": request.user, "posts": user_posts}
    )


# 4. Other Users Page
@login_required
def other_users_view(request):
    users = User.objects.exclude(id=request.user.id)
    return render(request, "other_users.html", {"users": users})


# 5. Show All Posts
def all_posts_view(request):
    posts = Post.objects.all().order_by("-created_at")
    return render(request, "all_posts.html", {"posts": posts})


# 6. Adding Post
@login_required
def add_post_view(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect("all_posts")
    else:
        form = PostForm()
    return render(request, "add_post.html", {"form": form})


# 7. Removing Post
@login_required
def delete_post_view(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    # მხოლოდ პოსტის ავტორს შეუძლია წაშლა
    if post.author == request.user:
        post.delete()
        messages.success(request, "პოსტი წარმატებით წაიშალა!")
    else:
        messages.error(request, "თქვენ არ გაქვთ ამ პოსტის წაშლის უფლება!")
    return redirect("profile")