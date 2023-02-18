import { useState, useEffect } from 'react';
import { 
	Box, 
	Grid,
} from '@mui/material';
import dayjs from 'dayjs';

import Header from '../components/Header';
import MapView from '../components/MapView';
import MyLocation from '../components/MyLocation';
import SearchRoute from '../components/SearchRoute';
import { useGetAllRoutesQuery } from '../services/RoutesServices';
import { filterByTimeInterval } from '../helpers/filters';

const Dashboard = () => {

	const [hour, setHour] = useState<string>( dayjs().hour() + ':' + dayjs().minute() );
	const [timeInterval, setTimeInterval] = useState<number>(60);
	
	const [routes, setRoutes] = useState<any>([]);
	const [filteredRoutes, setFilteredRoutes] = useState<any>([]);

	const { data, isLoading, isError, error } = useGetAllRoutesQuery({});
		
	const handleSearch = (data: any) => {
		const filteredRoutes = filterByTimeInterval(routes, hour, timeInterval);
		setFilteredRoutes(filteredRoutes);
	};

	useEffect(() => {
		if (data) {
			setRoutes(data.items);
			handleSearch(data);
		}
	}, [data]);


	return (
		<Box>
			<Header />
			<Grid container mt={8}>
				<Grid item xs={12} sx={{ height: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Grid item xs={12} sm={6} md={3}>
						<SearchRoute date={hour} setHour={setHour} timeInterval={timeInterval} setTimeInterval={setTimeInterval} handleSearch={handleSearch} />
					</Grid>
					<Grid item xs={12} sm={6} md={3} >
						<MyLocation />
					</Grid>
				</Grid>
				<Grid item xs={12} boxShadow={10} borderRadius={5}>
					<Box sx={{ height: '65vh' }} >
						{(isLoading) ? (
							<h1>Loading...</h1>
						) : (
							<MapView locations={filteredRoutes} />
						)}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Dashboard;
