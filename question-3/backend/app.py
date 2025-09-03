from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB (adjust URI as needed)
client = MongoClient("mongodb+srv://shalini:uZu5uDcRsni9dk94@cluster0.6osqwng.mongodb.net/")
db = client.todo_db
collection = db.todo_items

@app.route('/submittodoitem', methods=['POST'])
def submit_todo_item():
    data = request.get_json()
    item_name = data.get("itemName")
    item_description = data.get("itemDescription")

    if not item_name or not item_description:
        return jsonify({"message": "Item name and description are required"}), 400

    collection.insert_one({
        "itemName": item_name,
        "itemDescription": item_description
    })

    return jsonify({"message": "To-Do item saved successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
