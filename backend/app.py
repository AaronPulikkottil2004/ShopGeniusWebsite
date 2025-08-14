from flask import Flask, request, jsonify
from flask_cors import CORS
from agents.master_agent import MasterAgent
import google.generativeai as genai
import config
import os
from flask import send_from_directory

app = Flask(__name__)
CORS(app)

# Configure Gemini AI
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-1.5-flash')

master_agent = MasterAgent(model)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        # Get and validate input
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({"error": "Invalid request format"}), 400
            
        user_message = data['message']
        
        # Initialize model if not done already
        if 'model' not in globals():
            genai.configure(api_key=config.GEMINI_API_KEY)
            globals()['model'] = genai.GenerativeModel('gemini-pro')
        
        # Generate response with error handling
        response = model.generate_content(user_message)
        
        # Format the response
        formatted = response.text.replace('**', '')  # Remove bold markers
        formatted = formatted.replace('•', '\n-')   # Format bullets
        
        return jsonify({
            "success": True,
            "response": formatted
        })
        
    except Exception as e:
        print(f"ERROR: {str(e)}")  # Log full error
        return jsonify({
            "success": False,
            "error": "Failed to generate response",
            "details": str(e)
        }), 500
    
@app.route('/api/products', methods=['GET'])
def get_products():
    # Sample product data
    products = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "price": 99.99,
            "image": "Headphones.jpeg",
            "rating": 4.5,
            "category": "Electronics"
        },
        {
            "id": 2,
            "name": "Smart Watch",
            "price": 199.99,
            "image": "Smart watch.jpg",
            "rating": 4.2,
            "category": "Electronics"
        },
        {
            "id": 3,
            "name": "Running Shoes",
            "price": 79.99,
            "image": "Running Shoes.jpg",
            "rating": 4.7,
            "category": "Fashion"
        },
        {
            "id": 4,
            "name": "Backpack",
            "price": 49.99,
            "image": "Backpack.jpg",
            "rating": 4.3,
            "category": "Fashion"
        }
    ]
    return jsonify(products)

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory('static/images', filename)

if __name__ == '__main__':
    app.run(debug=True)