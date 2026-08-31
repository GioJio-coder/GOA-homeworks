# forms.py
from django import forms

# 1. Registration Form
class RegisterForm(forms.Form):
    first_name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'input-name'})
    )
    last_name = forms.CharField()
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'style': 'color: blue;'})
    )
    age = forms.IntegerField()
    password = forms.CharField(widget=forms.PasswordInput)
    phone = forms.CharField()


# 2. Login Form
class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)


# 3. Product Form
class ProductForm(forms.Form):
    name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'product-name'})
    )
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    quantity = forms.IntegerField()
    description = forms.CharField(widget=forms.Textarea)
    category = forms.CharField()


# 4. Student Form
class StudentForm(forms.Form):
    name = forms.CharField()
    surname = forms.CharField()
    age = forms.IntegerField()
    email = forms.CharField(widget=forms.EmailInput)
    grade = forms.IntegerField()