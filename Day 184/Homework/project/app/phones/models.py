from django.db import models

class Phone(models.Model):
    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    price = models.DecimalField(max_length=10, decimal_places=2, max_digits=10)
    release_year = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return f"{self.brand} {self.model}"