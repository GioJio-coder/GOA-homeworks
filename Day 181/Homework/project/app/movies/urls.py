from django.urls import path
from .import views

urlpatterns = [
    path('', name='movie_list'),
    path('<int:movie_id>/', name='movie_detail'),
    path('year/<int:movie_id>/', name='movie_year'),
]