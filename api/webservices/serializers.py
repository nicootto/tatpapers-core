from rest_framework import serializers

from products.models import Category, Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["featured", "url"]

    url = serializers.CharField(source="image.url")


class ProductSerializer(serializers.Serializer):
    images = ProductImageSerializer(source="productimage_set", many=True)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategoryProductsSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
