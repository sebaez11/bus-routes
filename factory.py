# utils
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
import os

# Flask
from flask import Flask, jsonify, request
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required

# Models
from .models import User, Route
from .models import db

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

    with app.app_context():
        db.init_app(app)

    @app.route('/')
    def hello_world():
        return f'Hello, World!'
    
        
    @app.route('/login', methods=['POST'])
    def login():
        username = request.json.get('username', None)
        password = request.json.get('password', None)

        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify({"msg": "Username not found"}), 401

        if not check_password_hash(user.password, password):
            return jsonify({"msg": "Incorrect password"}), 401

        access_token = create_access_token(identity=username, expires_delta=datetime.timedelta(hours=1))

        return jsonify(access_token=access_token), 200
    
    @app.route('/signup', methods=['POST'])
    def signup():
        full_name = request.json.get('full_name')
        username = request.json.get('username')
        password = request.json.get('password')

        if not all([full_name, username, password]):
            return jsonify({'msg': 'Please provide all required fields'}), 400

        if User.query.filter_by(username=username).first():
            return jsonify({'msg': 'Username already exists'}), 409

        new_user = User(full_name=full_name, username=username, password=generate_password_hash(password))

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'msg': 'User created successfully'}), 201


    return app