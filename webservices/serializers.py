from rest_framework import serializers

from products.models import Category, ProductImage, Image, Product, Label


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


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.CharField(source="image.url")

    class Meta:
        model = Category
        fields = '__all__'


class CategoryProductsSerializer(CategorySerializer):
    products = serializers.SerializerMethodField()

    def get_products(self, category):
        products = category.products
        labels = self.context["labels"]
        if labels:
            products = products.filter(labels__in=labels)

        return ProductSerializer(products, many=True).data
