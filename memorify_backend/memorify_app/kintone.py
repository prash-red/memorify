from os import getenv
from os.path import dirname, join

import requests
from dotenv import load_dotenv


class Kintone:
    def __init__(self):
        dotenv_path = join(dirname(__file__), '.env')
        load_dotenv(dotenv_path)
        self.api_key = getenv("KINTONE_API_KEY")

    def upload_file(self, file):
        headers = {
            'X-Cybozu-API-Token': 'Xu3GtWt0sPOmlzNmWgDzsxBzyKAqMmLIuP3G5Efx'
        }
        json = requests.post("https:///uoft-hax-album.kintone.com/k/v1/file.json",
                             headers=headers,
                             files={'file': file}).json()
        file_key = json['fileKey']
        body = {
                "app": 4,
                "record": {
                    "Attachment": {
                      "value": [
                        {
                          "fileKey": file_key
                        }
                      ]
                    }
                  }
                }
        json = requests.post("https:///uoft-hax-album.kintone.com/k/v1/record.json",
                             headers=headers,
                             json=body).json()
        return json['id']

    def download_file(self, record_id):
        headers = {
            'X-Cybozu-API-Token': 'Xu3GtWt0sPOmlzNmWgDzsxBzyKAqMmLIuP3G5Efx'
        }
        params = {
            'app': 4,
            'id': record_id
        }
        json = requests.get("https:///uoft-hax-album.kintone.com/k/v1/record.json",
                            headers=headers,
                            params=params).json()
        file_key = json['record']['Attachment']['value']['fileKey']
        params = {
            'fileKey': file_key
        }
        content = requests.get("https:///uoft-hax-album.kintone.com/k/v1/record.json",
                               headers=headers,
                               params=params).content
        return content
