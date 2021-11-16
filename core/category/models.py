from django.db import models

class Category(models.Model):
  name = models.CharField(max_length=256)
  image = models.URLField(max_length=256)

  def __str__(self):
    return self.name

  class Meta:
    verbose_name_plural = 'categories'
