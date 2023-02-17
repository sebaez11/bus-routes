import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { IBusStop } from '../interfaces';
import 'leaflet/dist/leaflet.css';

const MapView = ( { locations }: { locations: IBusStop[] } ) => {
	return (
		<MapContainer
			center={[4.138268, -73.626186]}
			zoom={14}
			scrollWheelZoom={false}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{locations.map(({ location, bus }, index) => (
				<Marker position={[location.latitude, location.longitude]} key={index}>
					<Popup>
						{ 'Paradero: ' + location.name } <br /> { 'Bus: ' + bus.name + ' '} <br /> { 'Hora: ' + bus.hour }
					</Popup>
				</Marker>
			))}

		</MapContainer>
	);
};

export default MapView;
