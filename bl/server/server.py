from flask import Flask, jsonify, request

app = Flask(__name__)

# We'll just use a simple in-memory store for our "database"
database = []

@app.route('/test', methods=['GET'])
def get_test():
    return jsonify({'greetings': 'hello'})

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(database)

@app.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    database.append(data)
    return jsonify(data), 201

@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    for item in database:
        if item['id'] == item_id:
            return jsonify(item)
    return jsonify({'error': 'Not found'}), 404

@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    for item in database:
        if item['id'] == item_id:
            item.update(data)
            return jsonify(item)
    return jsonify({'error': 'Not found'}), 404

@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    for item in database:
        if item['id'] == item_id:
            database.remove(item)
            return jsonify({'result': 'success'})
    return jsonify({'error': 'Not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
