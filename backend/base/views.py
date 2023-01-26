from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from . import products
# Create your views here.
@api_view(['GET'])
def getProducts(request):
    allproducts = products.products
    return Response(allproducts)
@api_view(['GET'])
def getProduct(request,pk):
    product=None
    allproducts = products.products
    for p in allproducts:
        if p['_id'] == pk:
            product = p
            break
    return Response(product)