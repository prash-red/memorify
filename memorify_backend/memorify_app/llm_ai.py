import cohere

class LLM_AI:
    def __init__(self):
        self.cohere = cohere.Client()

    def get_character_list(self, journal_entry: str) -> list[str]:
        """Returns a list of characters in a journal entry"""
        prompt = f'Journal Entry: {journal_entry}\n Return a list of all the important characters in this journal entry. The list must be in the format: character1,character2,character3,...'
        response = self.cohere.generate(
            prompt
        )
        return response.data[0].text.split(",")
    
    def generate_title(self, journal_entry: str) -> str:
        """Generates a title based on a journal entry"""
        prompt = f'Journal Entry: {journal_entry}\n Generate a title for this journal entry. The title should be just one sentence. Dont include anything else'
        response = self.cohere.generate(
            prompt
        )
        return response.data[0].text
    
    def get_personality(self, journal_entry: str, character) -> str:
        """Returns a personality description of a character based on a journal entry"""
        prompt = f'Journal Entry: {journal_entry}\n Character: {character}\n Ananlyze the journal entry and generate a personality descriptio for the given character in this journal entry. The response must be in the format: charactername: personality description.The description should be just one paragraph. Dont include anything else'
        response = self.cohere.generate(
            prompt
        )
        return response.data[0].text
    
    def modify_personality(self, journal_entry: str, character:str, personality_description: str) -> str:
        """Modifies the personality traits of a character based on a journal entry"""
        prompt = f'Journal Entry: {journal_entry}\n Character: {character}\n Personality: {personality_description}\n Modify the personality description of the given character based on this new journal entry. The response must be in the format: charactername: personality description. The description should be just one paragraph. Dont include anything else'
        response = self.cohere.generate(
            prompt
        )
        return response.data[0].text
    def generate_story(self, journal_entry: str) -> list[str]:
        """Generates a story based on a journal entry"""
        prompt = f'Journal Entry: {journal_entry}\n Generate a captivating narrative based on the user\'s journal entry. Craft a story that weaves together the emotions, experiences, and relationships described in the journal entry. Explore character development, pivotal moments, and the overall journey outlined in the entry, creating a compelling and engaging storyline that captures the essence of the user\'s personal reflection. each paragraph should be separated by two new line and be more than 500 characters. Each Paragraph must contain the names of the characters involved. Generate at least 3 paragraphs.'
        response = self.cohere.generate(
            prompt
        )
        return response.data[0].text.split("\n\n")

    def rank_people(self, personality_list: list[str],  query) -> list[str]:
        """Ranks the personality list based on a query"""
        response = self.cohere.rerank(
            model="rerank-english-v2.0",
            query = query,
            documents=personality_list,
            top_n=3
        )
        
        result = [i.document['text'] for i in response]
        
        return result
       