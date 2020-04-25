from django.db import models


class Image(models.Model):
    name = models.CharField(max_length=200)
    url = models.URLField(max_length=4096)

    def __str__(self):
        return self.name


class Category(models.Model):
    class Meta:
        verbose_name_plural = "categories"

    name = models.CharField(max_length=200)
    image = models.ForeignKey(Image, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Label(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    image = models.ForeignKey(Image, on_delete=models.CASCADE)
    featured = models.BooleanField(default=False)


class Product(models.Model):
    number = models.IntegerField(unique=True)
    categories = models.ManyToManyField(Category, related_name='products')
    labels = models.ManyToManyField(Label, related_name='products')
    images = models.ManyToManyField(Image, through=ProductImage)

    def __str__(self):
        return str(self.number)
