from django.urls import path
from . import views

urlpatterns = [
    path('<str:brand_name>/', views.brand_page, name='brand_page'),

    path('<str:brand_name>/<str:model_name>/', views.model_page, name='model_page'),
]