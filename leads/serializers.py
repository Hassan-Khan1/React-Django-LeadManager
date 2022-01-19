
from rest_framework import serializers
from leads.models import Lead
# from django.contrib.auth.models import User
 

class LeadSerializer(serializers.ModelSerializer):
	class Meta:
		model = Lead
		fields = '__all__'
		  
