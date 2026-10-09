from django import forms
from django.contrib.auth.models import User

class RegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        widgets = {
            'password': forms.PasswordInput(attrs={'style': 'color: red;'})
        }

    def clean_username(self):
        username = self.cleaned_data.get('username')
        
        for char in username:
            if char.isdigit() or char in '@#$':
                raise forms.ValidationError("Username-ი არ უნდა შეიცავდეს ციფრს ან @, #, $ სიმბოლოებს")
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        
        if not email.endswith('@gmail.com'):
            raise forms.ValidationError("Email უნდა მთავრდებოდეს @gmail.com-ით")
        return email

    def clean_password(self):
        password = self.cleaned_data.get('password')
        
        if len(password) < 8:
            raise forms.ValidationError("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო")
        
        if not any(char.isdigit() for char in password):
            raise forms.ValidationError("პაროლი უნდა შეიცავდეს მინიმუმ 1 ციფრს")
            
        return password