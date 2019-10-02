from django.shortcuts import get_object_or_404, render
from .models import *
from django.http import JsonResponse
import json
# Create your views here.

def index(request):
	post = Company.objects.all()
	context = {
		'post':post,
	}
	return render(request, 'index.html' , context)

def requestAjax(request):
	if request.is_ajax():
		message = request.POST.get('message')
		company = Company.objects.create(title=message)
		data = {
			'id': company.id,
		}
	return JsonResponse(data)


def companydeleteitem(request):
	object_id = request.POST.get('id', None)
	b = get_object_or_404(Company, id=object_id)
	b.delete()
	data = {'message': 'delete'.format(b)}
	return JsonResponse(data)
