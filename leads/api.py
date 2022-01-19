from leads.models import *

from rest_framework import viewsets , permissions
from .serializers import LeadSerializer



class LeadViewSet(viewsets.ModelViewSet):
  queryset = Lead.objects.all()
  permissions_classess= [
    permissions.AllowAny
  ]
  serializer_class = LeadSerializer


