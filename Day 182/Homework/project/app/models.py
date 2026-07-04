from django.db import models

class CustomUser(User):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def str(self):
        return self.username