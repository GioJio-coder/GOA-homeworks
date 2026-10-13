from django import forms
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import re
from .models import Post  # დარწმუნდით, რომ Post მოდელი იმპორტირებულია

# 1. რეგისტრაციის ფორმა ვალიდაციებით
class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if re.search(r'[0-9@#$]', username):
            raise ValidationError("Username არ უნდა შეიცავდეს რიცხვებს ან სიმბოლოებს: @, #, $")
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if not email or not email.endswith('@gmail.com'):
            raise ValidationError("ელ-ფოსტა აუცილებლად უნდა მთავრდებოდეს gmail.com-ით")
        return email

    def clean_password(self):
        password = self.cleaned_data.get('password')
        if len(password) < 8:
            raise ValidationError("პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან")
        if not re.search(r'[0-9]', password):
            raise ValidationError("პაროლი უნდა შეიცავდეს მინიმუმ 1 რიცხვს")
        return password

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        if password and confirm_password and password != confirm_password:
            raise ValidationError("პაროლები არ ემთხვევა ერთმანეთს")
        return cleaned_data


# 2. პოსტის დამატების ფორმა ვალიდაციით
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']  # მიუთითეთ თქვენი პოსტის მოდელის ველები

    def clean_title(self):
        title = self.cleaned_data.get('title')
        if len(title) < 5:
            raise ValidationError("პოსტის სათაური უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს.")
        return title