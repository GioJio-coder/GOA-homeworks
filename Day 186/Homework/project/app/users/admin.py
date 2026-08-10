from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    # ადმინ პანელის სიაში გამოსაჩენი ველები
    list_display = ['username', 'email', 'first_name', 'last_name', 'phone_number', 'is_staff']
    
    # მომხმარებლის რედაქტირების გვერდზე ველების ჯგუფები
    fieldsets = UserAdmin.fieldsets + (
        ('დამატებითი ინფორმაცია', {'fields': ('phone_number', 'bio')}),
    )
    
    # ახალი მომხმარებლის შექმნის ფორმაში დამატებითი ველები
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('დამატებითი ინფორმაცია', {'fields': ('phone_number', 'bio')}),
    )

# მოდელის რეგისტრაცია
admin.site.register(CustomUser, CustomUserAdmin)