# Create your models here.

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have email address')

        email = self.normalize_email(email=email)
        user: UserAccount = self.model(email=email, name=name)
        user.set_password(password)
        user.save()
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_name(self):
        return self.name

    def __str__(self) -> str:
        return f'User(email: {self.email}, name: {self.name}'

class JournalEntry(models.Model):
    content: str = models.CharField(max_length=1000)
    title: str = models.CharField(max_length=255)
    date = models.DateField(auto_now=True)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)


class Contact(models.Model):
    name: str = models.CharField(max_length=255)
    photo_id: int = models.IntegerField()
    user: UserAccount = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    description: str = models.CharField(max_length=5000, default="")
    journal_entries = models.ManyToManyField(JournalEntry)
    email: str = models.EmailField()
