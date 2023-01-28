from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from . import products
from .models import *
from .serializers import *
# Create your views here.
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True,context={'request': request})
    return Response(serializer.data)
@api_view(['GET'])
def getProduct(request,pk):
    product= Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many=False,context={'request': request})
    return Response(serializer.data)