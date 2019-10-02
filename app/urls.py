from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='indes_url'),
    path('my_ajax_request/', requestAjax, name='my_ajax_request'),
    path('companydeleteitem/', companydeleteitem, name='companydeleteitem'),
]