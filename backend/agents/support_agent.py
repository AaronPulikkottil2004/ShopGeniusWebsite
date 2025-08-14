class SupportAgent:
    def __init__(self, model):
        self.model = model
        
    def handle_query(self, user_message, conversation_history):
        prompt = f"""
        You are the Customer Support agent for ShopGenius e-commerce platform.
        The user asked: "{user_message}"
        
        Conversation history:
        {conversation_history}
        
        Address customer concerns, complaints, and general inquiries. Be empathetic,
        patient, and solution-oriented. Escalate complex issues appropriately.
        """
        response = self.model.generate_content(prompt)
        return response.text