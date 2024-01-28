from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from rest_framework.fields import CharField, DateField, EmailField, IntegerField

from memorify_app.models import Contact

User = get_user_model()

class CustomUserCreateSerializer(UserCreateSerializer):
    """
    .
    """

    class Meta(UserCreateSerializer.Meta):
        """
        .
        """
        model = User
        fields = ('id', 'name', 'email', 'password')

# class RolodexSerializer(serializers.Serializer):
#     title = CharField(max_length=255)
#     date = DateField(format='%d %B %Y')
#
#     class Meta:
#         model = Rolodex
#         fields = ['title', 'date']

class ContactSerializer(serializers.Serializer):
    name = CharField(max_length=100)
    photo_id = IntegerField()
    email = EmailField()

    class Meta:
        model = Contact
        fields = ['name', 'photo_id', 'email']

class JournalEntrySerializer(serializers.Serializer):
    content = CharField(max_length=5000)
    title = CharField(max_length=200)
    date = DateField(format="%d %B %Y")
