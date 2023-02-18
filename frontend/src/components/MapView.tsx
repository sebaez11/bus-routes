import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export interface IBusStop {
    collectionId:   string;
    collectionName: string;
    created:        Date;
    hour:           string;
    id:             string;
    latitude:       number;
    longitude:      string;
    namebus:        string;
    station:        string;
    updated:        Date;
}

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

			{locations.map(( location , index) => (
				<Marker position={[location?.latitude, Number(location?.longitude)]} key={index}>
					<Popup>
						{ 'Paradero: ' + location?.station } <br /> { 'Bus: ' + location?.namebus + ' '} <br /> { 'Hora de salida: ' + location?.hour }
					</Popup>
				</Marker>
			))}

		</MapContainer>
	);
};

export default MapView;
