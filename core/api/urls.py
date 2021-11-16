from django.urls import include, path
from rest_framework import routers

from api.views.category import CategoryViewSet
from api.views.product import ProductViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
  path('', include(router.urls)),
]