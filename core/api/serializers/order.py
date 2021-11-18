from rest_framework import serializers

from order.models import Order
from api.serializers.amount import AmountSerializer

class OrderSerializer(serializers.ModelSerializer):
  products = AmountSerializer(source='amount_set', many=True)

  class Meta:
    model = Order
    fields = '__all__'
