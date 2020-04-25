from django.urls import include, path
from rest_framework import routers
from webservices import views

router = routers.DefaultRouter()
router.register('categories', views.CategoryView)

urlpatterns = [
    path('', include(router.urls)),
]