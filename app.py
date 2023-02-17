# Utils
from .factory import create_app
import os

# Models
from .models import User, Location, Route
from .models import db

# Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS

# Views
from .views import RouteView

app = create_app()

app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
jwt = JWTManager(app)

CORS(app, resources={r"/*": {"origins": "*"}})

with app.app_context():
    db.create_all()

route_view = RouteView.as_view('routes')
app.add_url_rule('/routes', view_func=route_view)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)