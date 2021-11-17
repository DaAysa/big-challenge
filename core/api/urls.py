from django.urls import include, path
from rest_framework import routers

from api.views.category import CategoryViewSet
from api.views.product import ProductViewSet
from api.views.order import OrderViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
  path('', include(router.urls)),
]
