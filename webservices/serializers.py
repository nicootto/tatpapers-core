from rest_framework import serializers

from products.models import Category, ProductImage, Image, Product


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["featured", "url"]

    url = serializers.CharField(source="image.url")


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "images"]

    images = ProductImageSerializer(source="productimage_set", many=True)


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.CharField(source="image.url")
    class Meta:
        model = Category
        fields = '__all__'


class CategoryProductsSerializer(CategorySerializer):
    products = ProductSerializer(many=True, read_only=True)
