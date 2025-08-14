class OrderAgent:
    def __init__(self, model):
        self.model = model
        
    def handle_query(self, user_message, conversation_history):
        prompt = f"""
        You are the Order Specialist for ShopGenius e-commerce platform.
        The user asked: "{user_message}"
        
        Conversation history:
        {conversation_history}
        
        Help with order tracking, returns, cancellations, shipping information, 
        and payment issues. Be precise with order details and policy information.
        If you need specific order numbers, politely ask for them.
        """
        response = self.model.generate_content(prompt)
        return response.text