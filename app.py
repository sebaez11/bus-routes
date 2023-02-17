from .factory import create_app
from .models import User, Location, Route
from flask_jwt_extended import JWTManager
import os
from .models import db

app = create_app()

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
jwt = JWTManager(app)


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)