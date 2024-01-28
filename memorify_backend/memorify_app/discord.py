from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from datetime import datetime
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import requests
from PIL import Image
from io import BytesIO
import random

class User:
    """Your discord account"""
    def __init__(self, email, password, url):
        # Your username and password
        self.email = email
        self.password = password

        # Url of the website you want to automatically access
        self.url = url

        # Driver of the browser you use
        self.driver = webdriver.Chrome()
        self.actions = ActionChains(self.driver)

        # Access to the website you want using the driver you want
        self.browse = self.driver.get(self.url)
        

    def login(self):
        """Login to discord"""
        self.driver.find_element(By.NAME,'email').send_keys(self.email)
        self.driver.find_element(By.NAME,'password').send_keys(self.password)
        self.driver.find_element(By.NAME,'password').send_keys(Keys.ENTER)

    def select_midjourney(self):
        """Choose where to send messages"""
        self.driver.find_element(By.LINK_TEXT, 'Midjourney Bot').click()

    def send_prompt(self, msg):
        """Send messages to text channel"""
        self.driver.find_element(By.CSS_SELECTOR, 'span.emptyText_c03d90').send_keys(msg, Keys.ENTER)
        self.log(msg)

    def generate_avatar(self, personality_descrption: str, art_style: str):
        """Generate avatar based on personality and art style"""
        prompt = f'/imagine Art Style: {art_style}, Generate an avatar based on the Personality: {personality_descrption} and art style. The avatar should be a cartoon image of the character with the given personality and art style --aspect 5:4'
        self.driver.find_element(By.CSS_SELECTOR, 'span.emptyText_c03d90').send_keys('/imagine', Keys.ENTER)
        self.driver.find_element(By.CSS_SELECTOR, 'span.emptyText_c03d90').send_keys(prompt, Keys.ENTER)
        self.log(prompt)
        

    def download_image(self, num: int) -> str: 
        """downloads the image and returns the image as bytes"""
        image_url = self.driver.find_elements(By.CLASS_NAME, "originalLink__94d5d")[-1].get_attribute('href')
        response = requests.get(image_url) 
        im = Image.open(BytesIO(response.content))
        #crops the top left corner of the image
        width, height = im.size
        left = 0 + random.randint(0, 1) * width/2
        top = 0 + random.randint(0, 1) * height/2
        right = left + width/2
        bottom = top + height/2
        im = im.crop((left, top, right, bottom))
        im.save('image.png')
        return 'image.png'

    def log(self, msg):
        """Msg log"""
        t = datetime.now().strftime('%H:%M:%S')
        print(f'[{t}] MESSAGE: {msg}')

    def close(self):
        """Close the browser"""
        self.driver.close()
