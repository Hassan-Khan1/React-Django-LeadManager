from operator import mod
from pyexpat import model
from venv import create
from django.db import models
from django.forms import CharField

# Create your models here.


class Lead(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100,unique=True)
  message = models.CharField(max_length=500, blank=True,null= True)
  updated_at = models.DateTimeField(auto_now=True)
  created_at = models.DateTimeField(auto_now_add=True)