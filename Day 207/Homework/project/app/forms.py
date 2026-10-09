from django import forms
from django.contrib.auth.models import User

class RegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'age', 'password']
        widgets = {
            'password': forms.PasswordInput(attrs={'style': 'color: red;'})
        }

    def clean_username(self):
        username = self.cleaned_data.get('username')
        for char in username:
            if char in '0123456789':
                raise forms.ValidationError("Username shouldn't contain numbers")
        return username

    def clean_age(self):
        age = self.cleaned_data.get('age')
        if age is not None and (age < 0 or age > 120):
            raise forms.ValidationError("Please enter a valid age (0-120)")
        return age

    def clean_password(self):
        password = self.cleaned_data.get('password')
        if len(password) < 8:
            raise forms.ValidationError("Password must be at least 8 characters long")
        return password