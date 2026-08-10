from django.urls import path
from . import views

urlpatterns = [
    # არსებული login/register მარშრუტები...
    path('logout/', views.user_logout, name='logout'),
    path('profile/', views.profile_view, name='profile'),
    path('profile/edit/', views.edit_profile, name='edit_profile'),
]