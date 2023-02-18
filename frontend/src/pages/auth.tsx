import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../hooks/redux';
import { setToken } from '../store/slices/authSlice';
import { useLoginMutation } from '../services/AuthService';
import logo from '../assets/images/logo.png';

const theme = createTheme();

const SignInSide = () => {
	
	const dispatch = useAppDispatch();

	const [ customError, setCustomError] = React.useState<string | null>(null);

	const [login, { isLoading, isError, error }] = useLoginMutation();

	const navigate = useNavigate();
	
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const identity = data.get('username') as string;
		const password = data.get('password') as string;

		try {
			const authData = await login({ identity, password }).unwrap();
			dispatch(setToken(authData.token));
			navigate('/');
		} catch (error: any) {
			setCustomError('Usuario o contraseña incorrectos');
		}
	};


	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://images.pexels.com/photos/15582409/pexels-photo-15582409.jpeg)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'white' }}>
							<img src={logo} alt="logo" style={{ width: 40, height: 40 }} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Iniciar sesión
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 2 }}
						>
							<TextField
								margin="normal"
								required={true}
								fullWidth
								id="username"
								label="Nombre de usuario"
								name="username"
								autoComplete="username"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								disabled={isLoading}
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								{isLoading ? <CircularProgress size={24} /> : 'Iniciar sesión'}
							</Button>
							{
								isError && (
									<Typography color="error" variant="body2" align="center">
										{customError}
									</Typography>
								)
							}

							<Grid container>
								<Grid item style={{ flexGrow: 1, textAlign: 'center' }}>
									<Link to="/" style={{ textDecoration: 'none' }}>
										{"Volver al inicio"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default SignInSide;
