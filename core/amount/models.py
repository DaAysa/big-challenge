from django.db import models

from product.models import Product
from order.models import Order

class Amount(models.Model):
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  order = models.ForeignKey(Order, on_delete=models.CASCADE)
  product_amount = models.IntegerField()

  class Meta:
    verbose_name = 'product'
    verbose_name_plural = 'product list'
