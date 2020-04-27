from rest_framework import viewsets
from rest_framework.response import Response

from products.models import Category, Product
from .serializers import (
    CategorySerializer,
    CategoryProductsSerializer,
    ProductSerializer
)


class CategoryView(viewsets.ViewSet):
    queryset = Category.objects.all()

    def list(self, request):
        categories = self.queryset
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        category = self.queryset.get(pk=pk)
        serialier = CategoryProductsSerializer(category)
        return Response(serialier.data)


class ProductView(viewsets.ViewSet):
    queryset = Product.objects.all()

    def retrieve(self, request, pk):
        product = self.queryset.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
