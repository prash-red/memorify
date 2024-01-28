from memorify_backend.memorify_app.discord import User
import time
from llm_ai import LLM_AI


llm_ai = LLM_AI()

journal_entry = "Today unfolded as a symphony of shared experiences between John and Sarah, painting the canvas of their connection with vibrant hues. The day commenced with the mellifluous tones of a cozy neighborhood cafe, where the duo immersed themselves in the ritual of morning coffee. The aroma of freshly brewed coffee lingered in the air, intertwining seamlessly with their laughter and setting the tone for the day ahead. As the sun ascended to its zenith, John and Sarah found themselves amidst the rustling leaves and open skies of a nearby park. What began as a casual rendezvous evolved into an impromptu picnic, as friends joined the duo under the protective branches of a stately oak tree. The picnic blanket unfolded, revealing an array of delicious snacks that became the centerpiece for shared laughter, card games, and tales of adventures. The day's narrative took an exciting turn as evening descended, casting a warm glow on John's inviting kitchen. Together, they embarked on a culinary adventure, a collaborative dance of flavors and aromas. The kitchen buzzed with the rhythm of shared efforts, creating a feast that mirrored the richness of their camaraderie. Around the dining table, conversations deepened into the realm of dreams and aspirations. The flickering candlelight witnessed the exchange of stories, vulnerabilities, and shared successes. The bond between John and Sarah matured like a fine wine, gaining depth with each passing moment. The crescendo of the day arrived with a movie night, where the flickering screen became a canvas for shared emotions. A classic film served as the backdrop, illuminating the room with the glow of nostalgia and eliciting a cascade of laughter and tears. Reflecting on this journal entry, gratitude wells up for the unique connection forged between John and Sarah. Their journey, narrated through the lens of a single day, speaks to the extraordinary beauty found in the ordinary moments shared between two souls."

personality_description = llm_ai.get_personality(journal_entry, "John")
print(personality_description)

with open('account.txt') as f:
    email = f.readline().strip()
    password = f.readline().strip()

user = User(email, password, 'https://discord.com/login')

user.login()
time.sleep(5)
user.select_midjourney()
time.sleep(3)
user.generate_avatar(personality_description, "Looney Tunes Cartoon")
time.sleep(60)
user.download_image(1)
