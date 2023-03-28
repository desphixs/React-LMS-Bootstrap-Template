from django.contrib import admin
from main.models import Teacher, CourseCategory, Course, Student

admin.site.register([Teacher, CourseCategory, Course, Student])
