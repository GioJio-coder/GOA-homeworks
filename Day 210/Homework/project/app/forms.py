import re
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class CustomRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True, widget=forms.EmailInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ['username', 'email']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
        }

    def clean_username(self):
        username = self.cleaned_data.get('username')
        # შემოწმება: არ უნდა შეიცავდეს რიცხვს ან @#$ სიმბოლოებს
        if any(char.isdigit() for char in username):
            raise forms.ValidationError("Username არ უნდა შეიცავდეს რიცხვებს!")
        if any(char in '@#$' for char in username):
            raise forms.ValidationError("Username არ უნდა შეიცავდეს სიმბოლოებს: @#$")
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # აუცილებლად უნდა მთავრდებოდეს gmail.com-ით
        if not email.lower().endswith('@gmail.com'):
            raise forms.ValidationError("Email აუცილებლად უნდა მთავრდებოდეს gmail.com-ით!")
        return email

    def clean_password1(self):
        password = self.cleaned_data.get('password1')
        # მინიმუმ 8 სიმბოლო და მინიმუმ 1 რიცხვი
        if len(password) < 8:
            raise forms.ValidationError("პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან.")
        if not any(char.isdigit() for char in password):
            raise forms.ValidationError("პაროლი უნდა შეიცავდეს მინიმუმ 1 რიცხვს.")
        return password