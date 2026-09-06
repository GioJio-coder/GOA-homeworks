from django import forms
from django.contrib.auth.models import User
from .models import Post, Product, Student


# 1. Registration Form
class RegisterForm(forms.ModelForm):
    first_name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "input-name"})
    )
    last_name = forms.CharField()
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={"style": "color: blue;"})
    )
    age = forms.IntegerField()
    password = forms.CharField(widget=forms.PasswordInput)
    phone = forms.CharField(max_length=20)

    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "password"]

    def save(self, commit=True):
        user = super().save(commit=False)
        user.username = self.cleaned_data["email"]  # იყენებს იმეილს იუზერნეიმად
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user


# 2. Login Form
class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)


# 3. Product Form
class ProductForm(forms.ModelForm):
    name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "product-name"})
    )

    class Meta:
        model = Product
        fields = ["name", "price", "quantity", "description", "category"]


# 4. Student Form
class StudentForm(forms.ModelForm):
    email = forms.EmailField(widget=forms.EmailInput)

    class Meta:
        model = Student
        fields = ["name", "surname", "age", "email", "grade"]


# Post-ის შესაქმნელი ფორმა
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ["title", "content"]