import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { 
	Box,
	TextField,
	Button,
	Card,
	CardContent,
	CardActions,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const SearchRoute = ({hour, setHour, timeInterval, setTimeInterval, handleSearch}: any) => {

	const [date, setDate] = useState<Dayjs | null>(dayjs());

    const handleChange = (newValue: Dayjs | null) => {
		setDate(newValue);
		setHour(newValue?.hour() + ':' + newValue?.minute());
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 2,
			}}
		>
			<Box>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 390,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 5,
						boxShadow: 5,
						gap: 2,
					}}
				>
					<CardContent
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
					>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<TimePicker
								label="Time"
								value={date}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
						<TextField
							label="Intervalo en minutos"
							id="outlined-size-small"
							size="small"
							type="number"
							value={timeInterval}
							onChange={(e) => setTimeInterval(Number(e.target.value))}
						/>
					</CardContent>
					<CardActions>
						<Button 
							type="submit" 
							variant="contained"
							onClick={handleSearch}
						>
							Busca Rutas
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
};

export default SearchRoute;
