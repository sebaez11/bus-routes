import React, { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { Box } from '@mui/material';
import { 
	TextField,
	Button,
	FormGroup,
} from '@mui/material';

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const AdminPanel = () => {

	const [value, setValue] = useState<Dayjs | null>(dayjs());

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
	};

	return (
		<>
			<Header />
			<Box sx={{ width: '90%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', flexDirection: 'row' }}>
				<Table />
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '25ch' },
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						borderRadius: 5,
						boxShadow: 10,
						padding: 2,
						gap: 2,
						marginLeft: 5,
					}}
					noValidate
					autoComplete="off"
					>

					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
						<TextField required id="name" label="Nombre del paradero" variant="outlined" InputLabelProps={{shrink: true}}/>
						<TextField required id="latitude" label="latitude" type="number" variant="filled" />
						<TextField required id="longitude" label="longitude" type="number" variant="filled" />
					</Box>
					
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
						<TextField required id="bus" label="Nombre del bus" variant="outlined" />
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<TimePicker
								label="Hora"
								value={value}
								onChange={handleChange}
								renderInput={(params) => <TextField {...params} />}
								
							/>
						</LocalizationProvider>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
						<Button
							type="submit"
							variant="contained"
							>
							Agregar
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AdminPanel;