from rest_framework import viewsets
from rest_framework.response import Response

from products.models import Category, Product, Label
from .serializers import (
    CategorySerializer,
    CategoryProductsSerializer,
    ProductSerializer,
    LabelSerializer)


class CategoryView(viewsets.GenericViewSet):
    def get_queryset(self):
        return Category.objects.all()

    def list(self, request):
        categories = self.get_queryset()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        labels = request.query_params.getlist("label")

        category = self.get_queryset().get(pk=pk)

        context = {"labels": labels}
        serialier = CategoryProductsSerializer(category, context=context)
        return Response(serialier.data)


class LabelView(viewsets.ReadOnlyModelViewSet):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer


class ProductView(viewsets.ViewSet):
    queryset = Product.objects.all()

    def retrieve(self, request, pk):
        product = self.queryset.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
