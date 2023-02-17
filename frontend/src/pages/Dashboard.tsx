import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { 
	Box, 
	Grid,
	TextField,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Header from '../components/Header';
import MapView from '../components/MapView';
import MyLocation from '../components/MyLocation';
import { useGetRoutesQuery } from '../services/RoutesServices';

const Dashboard = () => {
	const [value, setValue] = useState<Dayjs | null>(dayjs());

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	const { data, isLoading, error } = useGetRoutesQuery({});

	return (
		<Box>
			<Header />
			<Grid container mt={8}>
				<Grid item xs={12} sx={{ height: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Grid item xs={12} sm={6} md={3}>
						<Box>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<TimePicker
									label="Time"
									value={value}
									onChange={handleChange}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3} >
						<MyLocation />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ height: '65vh' }}>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							<MapView locations={data} />
						)}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Dashboard;
