import { useState, useEffect } from 'react';

import { 
	Box, 
	Button,
	Card,
	CardContent,
	CardActions,
} from '@mui/material';

const MyLocation = () => {

	const [location, setLocation] = useState<[number, number]>([0, 0]);

	const successCallback = (position: any) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		setLocation([latitude, longitude]);
		console.log(latitude, longitude);
	};

	const errorCallback = (error: any) => {
		console.log(error);
	};

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return (
		<Box>
			<Card
				sx={{
					minWidth: 375,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<CardContent>
					<h2>My location</h2>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<span>Latitude: {location[0]}</span>
						<span>Longitude: {location[1]}</span>
					</Box>
				</CardContent>
				<CardActions>
					<Button onClick={getLocation} variant="contained">Get location</Button> 
				</CardActions>
			</Card>
		</Box>
	);
};

export default MyLocation;
