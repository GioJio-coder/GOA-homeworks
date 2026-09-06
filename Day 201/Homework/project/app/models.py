from django.contrib.auth.models import User
from django.db import models


# პროდუქტის მოდელი
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.name


# სტუდენტის მოდელი
class Student(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age = models.IntegerField()
    email = models.EmailField()
    grade = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.name} {self.surname}"


# პოსტების მოდელი
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title