from operator import mod
from statistics import mode
from django.db import models

# Create your models here.

class Book(models.Model):
  title = models.TextField(max_length=32 , blank=True , null= True)