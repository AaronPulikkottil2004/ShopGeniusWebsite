class ProductAgent:
    def __init__(self, model):
        self.model = model
        
    def handle_query(self, user_message, conversation_history):
        prompt = f"""
        You are the Product Expert for ShopGenius e-commerce platform. 
        The user asked: "{user_message}"
        
        Conversation history:
        {conversation_history}
        
        Provide detailed information about products, comparisons, recommendations, 
        and purchasing advice. Be friendly and helpful. If you don't know specific 
        product details, suggest similar items or ask clarifying questions.
        """
        response = self.model.generate_content(prompt)
        return response.text