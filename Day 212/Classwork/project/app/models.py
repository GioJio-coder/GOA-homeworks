from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True, verbose_name="ტელეფონის ნომერი")
    birth_date = models.DateField(blank=True, null=True, verbose_name="დაბადების თარიღი")

    def __str__(self):
        return self.username