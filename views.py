# Utils
from datetime import datetime

# Models
from .models import Location, Route
from .models import db

# Flask
from flask import Flask, jsonify, request
from flask_jwt_extended import jwt_required
from sqlalchemy.orm import joinedload
from flask.views import MethodView



class RouteView(MethodView):
        
        @jwt_required()
        def get(self):
            routes = Route.query.options(joinedload(Route.location)).all()
            data = []
            for route in routes:
                route_data = {
                    "bus": route.bus,
                    "hour": route.hour.strftime("%H:%M:%S"),
                    "location_name": route.location.name,
                    "location_latitude": route.location.latitude,
                    "location_longitude": route.location.longitude
                }
                data.append(route_data)
            return jsonify(data), 200

        @jwt_required()
        def post(self):
            data = request.get_json()
            latitude = data.get('latitude')
            longitude = data.get('longitude')
            name = data.get('name')
            bus = data.get('bus')
            hour = data.get('hour')

            if not all(key in data for key in ('latitude', 'longitude', 'name', 'bus', 'hour')):
                return jsonify({'message': 'Missing fields'}), 400
            
            if Location.query.filter_by(name=name).first():
                return jsonify({'msg': 'Location already exists'}), 409

            # Location
            location = Location(latitude=latitude, longitude=longitude, name=name)
            db.session.add(location)
            db.session.commit()

            # Route
            route = Route(location=location, bus=bus, hour=datetime.strptime(hour, '%H:%M:%S').time())
            #route = Route(bus=bus, hour=hour, location=location)
            db.session.add(route)
            db.session.commit()

            return jsonify({'message': 'Route created successfully', 'id': route.id})

        @jwt_required()
        def put(self):
            data = request.get_json()
            latitude = data.get('latitude')
            longitude = data.get('longitude')
            name = data.get('name')
            bus = data.get('bus')
            hour = data.get('hour')

            route_id = request.args.get('route_id')
            route = Route.query.get(route_id)

            if not route:
                return jsonify({'message': f'Route with id {route_id} not found'}), 404

            route.bus = bus
            route.hour=datetime.strptime(hour, '%H:%M:%S').time()
            #route.hour = hour
            route.location.latitude = latitude
            route.location.longitude = longitude
            route.location.name = name

            db.session.commit()

            return jsonify({
                'message': f'Route with id {route_id} updated successfully',
                'id': route.id,
                'bus': route.bus,
                'hour': route.hour.strftime('%H:%M:%S'),
                'latitude': route.location.latitude,
                'longitude': route.location.longitude,
                'name': route.location.name
            })

        @jwt_required()
        def delete(self):

            route_id = request.args.get('route_id')
            route = Route.query.get(route_id)

            if not route:
                return jsonify({'message': f'Route with id {route_id} not found'}), 404

            db.session.delete(route)
            db.session.commit()

            return jsonify({'message': f'Route with id {route_id} deleted successfully'})
