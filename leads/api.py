from leads.models import *

from rest_framework import viewsets , permissions
from .serializers import LeadSerializer



class LeadViewSet(viewsets.ModelViewSet):

  permissions_classess= [
    permissions.AllowAny
  ]
  serializer_class = LeadSerializer

  def get_queryset(self):
    return self.request.user.leads.all

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

  # queryset = Lead.objects.all()
  # permissions_classess= [
  #   permissions.AllowAny
  # ]
  # serializer_class = LeadSerializer


