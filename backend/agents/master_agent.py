import re
class MasterAgent:
    def __init__(self, model):
        self.model = model
        
    def handle_message(self, user_message, conversation_history):
        prompt = f"""
        You are ShopGenius, an AI assistant for an e-commerce website. 
        Answer the user's question directly and completely without asking for more information.
        
        User's question: "{user_message}"
        
        Guidelines:
        1. Provide complete answers immediately
        2. Use bullet points (•) for lists
        3. Use **bold** for important terms
        4. Never ask for more information - make reasonable assumptions if needed
        5. Keep responses concise but informative
        
        Previous conversation context:
        {conversation_history}
        
        Provide the best possible answer to the user's question.
        """
        
        response = self.model.generate_content(prompt)
        return self._format_response(response.text)
    
def format_response(self, text):
    if not text:
        return ""
    
    # Remove all formatting and ensure clean line breaks
    clean_text = re.sub(r'<[^>]*>', '', text)  # Remove HTML tags
    clean_text = clean_text.replace("**", "")   # Remove bold markers
    
    # Format bullets with newlines
    clean_text = clean_text.replace("•", "\n-")
    
    # Ensure double newlines between paragraphs
    clean_text = clean_text.replace("\n", "\n\n")
    
    return clean_text.strip()