from django.contrib import admin

from products.models import Category, Image, Label, Product, ProductImage


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass

@admin.register(Label)
class LabelAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    class LabelInline(admin.TabularInline):
        model = Product.labels.through

    class ProductImage(admin.TabularInline):
        model = ProductImage

    inlines = [
        LabelInline,
        ProductImage
    ]

    exclude = ['labels']
