from django.urls import include, path
from rest_framework import routers
from webservices import views

router = routers.DefaultRouter()
router.register('categories', views.CategoryView, basename='categories')
router.register('labels', views.LabelView, basename='labels')
router.register('products', views.ProductView, basename='products')

urlpatterns = [
    path('', include(router.urls)),
]