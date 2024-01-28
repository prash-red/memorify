from django.shortcuts import render

# Create your views here.
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import views, status

from memorify_app.models import JournalEntry, Contact, UserAccount
from memorify_app.response_model import response_model
from memorify_app.serializers import ContactSerializer, JournalEntrySerializer


# Create your views here.

def split_content(content):
    return []


def extract_characters(content):
    return ["Saul", "Walt", "Jesse"]


def generate_title(content):
    return "Lorem ip"


def get_new_description(description, content):
    return ""


def create_avatar(description, art_style):
    return 0


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
            contact = user.contact_set.filter(name=character)[0]
            print("hi")
            if not contact:
                contact = Contact(name=character)
                contact.user = user
            contact.description = get_new_description(contact.description, entry.content)
            contact.photo_id = create_avatar(contact.description)
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
        journal_entry = journal_entries[0]
        deserialized_data = ContactSerializer(journal_entry.contact_set, many=True)
        response = response_model(status=status.HTTP_200_OK, message='Contacts displayed',
                                  details=deserialized_data.data)
        return Response(data=response, status=status.HTTP_200_OK)

    def post(self, request):
        user: UserAccount = self.request.user
        data = JSONParser().parse(request)
        art_style = data['artStyle']
        contact_dict = {contact.name: contact for contact in user.contact_set.all()}
        for character in data['characters']:
            contact_dict[character['name']].email = character['email']
            contact_dict[character['name']].photo_id = create_avatar(contact_dict[character['name']].description, art_style)
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
