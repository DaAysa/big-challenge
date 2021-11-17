from django.db import models

class Product(models.Model):
  name = models.CharField(max_length=256)
  image = models.URLField(max_length=256)
  price = models.IntegerField(default=0)
  category = models.ForeignKey('category.Category', on_delete=models.CASCADE)

  def __str__(self):
    return self.name
