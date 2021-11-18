from django.contrib import admin
from amount.models import Amount

class AmountInline(admin.TabularInline):
  model = Amount
  extra = 1
