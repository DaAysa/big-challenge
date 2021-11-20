from rest_framework import viewsets

from order.models import Order
from api.serializers.order import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
  serializer_class = OrderSerializer
  queryset = Order.objects.all()
