from django.urls import path
from main.views import TeacherList

urlpatterns = [
    path("teacher/", TeacherList.as_view())
]