from django.contrib import admin
from order.models import Order
from amount.admin import AmountInline

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
  list_display = ('pk', 'total_price')
  inlines = (AmountInline,)
