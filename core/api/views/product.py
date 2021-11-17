from rest_framework import viewsets

from product.models import Product
from api.serializers.product import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
  serializer_class = ProductSerializer
  queryset = Product.objects.all()