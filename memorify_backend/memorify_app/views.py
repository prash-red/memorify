import os
import sys
from django.http import FileResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import views, status

from memorify_app.models import JournalEntry, Contact, UserAccount
from memorify_app.response_model import response_model
from memorify_app.serializers import ContactSerializer, JournalEntrySerializer

from  memorify_app.llm_ai import LLM_AI
import time
from memorify_app.discord import User
from memorify_app.kintone import Kintone

# Create your views here.

def split_content(content):
    return []


def extract_characters(content):
    llm_ai = LLM_AI()
    return llm_ai.get_character_list(content)


def generate_title(content):
    llm_ai = LLM_AI()
    return llm_ai.generate_title(content)


def get_new_description(description, content, character):
    llm_ai = LLM_AI()
    new_description = llm_ai.modify_personality(content, character,description)
    return new_description

def create_avatar(discord, description, art_style):
    discord.generate_avatar(description, art_style)
    time.sleep(70)
    image = discord.download_image(1)
    kintone = Kintone()
    return kintone.upload_file(image)


class JournalEntryView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # try:
        #     user = self.request.user
        #     rolodex =
        #     deserialized_data = RolodexSerializer(albums, many=True)
        #     response = response_model(status=status.HTTP_200_OK, message='Albums displayed',
        #                               details=deserialized_data.data)
        #     return Response(data=response, status=status.HTTP_200_OK)
        # except:
        #     response = response_model(status=status.HTTP_400_BAD_REQUEST, message='unable to fetch albums')
        #     return Response(status=status.HTTP_400_BAD_REQUEST, data=response)
        return

    def post(self, request):
        user = self.request.user
        data = JSONParser().parse(request)
        if 'content' not in data:
            response = response_model(status=status.HTTP_400_BAD_REQUEST, message='no content provided')
            return Response(status=status.HTTP_400_BAD_REQUEST, data=response)

        content = data['content']
        entry: JournalEntry = JournalEntry(title=generate_title(content), user=user, content=content)
        entry.save()
        # entries_content: list[str] = split_content(content)
        main_characters: list[str] = extract_characters(content)
        for character in main_characters:
            contact = user.contact_set.filter(name=character).first()
            print("hi")
            if not contact:
                contact = Contact(name=character, photo_id=0)
                contact.user = user
            contact.description = get_new_description(contact.description, entry.content, contact.name)
            #contact.photo_id = create_avatar(contact.description, data['artStyle'])
            contact.save()
            contact.journal_entries.add(entry)
            contact.save()
            entry.save()
        user.save()
        response = response_model(status=status.HTTP_200_OK, message='no art-style provided', details=entry.title)
        return Response(status=status.HTTP_200_OK, data=response)

class CharacterNamesView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user: UserAccount = self.request.user
        title = self.request.query_params.get("title")
        if title is None:
            response = response_model(status=status.HTTP_400_BAD_REQUEST, message='no album title provided')
            return Response(status=status.HTTP_400_BAD_REQUEST, data=response)
        journal_entries = user.journalentry_set.filter(title=title)
        print(journal_entries)
        journal_entry = journal_entries[0]
        deserialized_data = ContactSerializer(journal_entry.contact_set, many=True)
        response = response_model(status=status.HTTP_200_OK, message='Contacts displayed',
                                  details=deserialized_data.data)
        return Response(data=response, status=status.HTTP_200_OK)

    def post(self, request):
        with open('memorify_app/account.txt') as f:
            email = f.readline().strip()
            password = f.readline().strip()

        discord = User(email, password, 'https://discord.com/login')

        discord.login()
        time.sleep(5)
        discord.select_midjourney()
        time.sleep(3)
        
        user: UserAccount = self.request.user
        data = JSONParser().parse(request)
        art_style = data['artStyle']
        contact_dict = {contact.name: contact for contact in user.contact_set.all()}
        for character in data['characters']:
            contact_dict[character['name']].email = character['email']
            contact_dict[character['name']].photo_id = create_avatar(discord, contact_dict[character['name']].description, art_style)
            contact_dict[character['name']].save()
        response = response_model(status=status.HTTP_200_OK, message='Contacts updated')
        return Response(data=response, status=status.HTTP_200_OK)


class ContactsView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        deserialized_data = ContactSerializer(user.contact_set.all(), many=True)
        response = response_model(status=status.HTTP_200_OK, message='Contacts displayed',
                                  details=deserialized_data.data)
        return Response(data=response, status=status.HTTP_200_OK)


class ContactEntryView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        name = self.request.query_params.get("name")
        contact: Contact = user.contact_set.filter(name=name)[0]
        deserialized_data = JournalEntrySerializer(contact.journal_entries.order_by('-date').values(), many=True)
        response = response_model(status=status.HTTP_200_OK, message='Journal entries displayed',
                                  details=deserialized_data.data)
        return Response(data=response, status=status.HTTP_200_OK)

class AvatarView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        name = self.request.query_params.get("name")
        contact: Contact = user.contact_set.filter(name=name)[0]
        kintone = Kintone()
        file = kintone.download_file(contact.photo_id)
        response = FileResponse(file)
        response['Content-Disposition'] = f'attachment; filename="image.png"'
        response['Content-Type'] = 'image/png'
        return response
