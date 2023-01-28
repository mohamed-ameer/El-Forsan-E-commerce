from rest_framework import serializers
from .models import *
# get put update delete Assignment data
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields=('_id','name','name_ar','image','description','description_ar','weight','package_weight','rating','numReviews','price','price_ar','countInStock')
