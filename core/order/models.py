from django.db import models

from product.models import Product

class Order(models.Model):
  total_price = models.IntegerField(default=0)
  products = models.ManyToManyField(Product)

  def __str__(self):
    return str(self.pk)
