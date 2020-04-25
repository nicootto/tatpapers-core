from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import CategorySerializer, CategoryProductsSerializer
from products.models import Category


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