from django.db import models


class UserProfile(models.Model):
    first_name = models.CharField(max_length=50, verbose_name="სახელი")
    last_name = models.CharField(max_length=50, verbose_name="გვარი")
    email = models.EmailField(unique=True, verbose_name="ელ. ფოსტა")
    age = models.PositiveIntegerField(verbose_name="ასაკი")
    password = models.CharField(max_length=128, verbose_name="პაროლი")
    phone = models.CharField(max_length=20, verbose_name="ტელეფონის ნომერი")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"