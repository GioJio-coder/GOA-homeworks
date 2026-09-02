from django import forms


class RegisterForm(forms.Form):
    first_name = forms.CharField(label="სახელი", max_length=50)
    last_name = forms.CharField(label="გვარი", max_length=50)
    email = forms.EmailField(label="ელ. ფოსტა")
    age = forms.IntegerField(label="ასაკი", min_value=0)
    password = forms.CharField(
        label="პაროლი", widget=forms.PasswordInput()
    )
    phone = forms.CharField(label="ტელეფონის ნომერი", max_length=20)