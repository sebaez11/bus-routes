import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { useAppSelector, useAppDispatch } from '../hooks/redux';

import logo_unillanos from '../assets/images/logo_unillanos.png';

const pages = ['Inicio', 'Administración', 'Información', 'Contacto'];
const settings = ['My Account', 'Logout'];

function ResponsiveAppBar() {

	const { isAuthenticated } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		dispatch({ type: 'auth/logout' });
	};


	return (
		<AppBar style={{ background: '#222f3e' }} position="fixed">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box style={{ display: 'flex', alignItems: 'center' }}>
						<img
							src={logo_unillanos}
							alt="logo_unillanos"
							style={{ width: 120, height: 50 }}
						/>
						<Typography
							variant="h4"
							noWrap
							component="a"
							sx={{
								mr: 3,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.1rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							RUTAS
						</Typography>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						RUTAS
					</Typography>
					
					<Divider orientation="vertical" flexItem sx={{ background: 'white', display: { xs: 'none', md: 'flex' } }} />
					
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}>
						{pages.map((page) => (
							(page === 'Administración') ? (
								isAuthenticated && <Button
									key={page}
									color='error'
									component={Link}
									to={page.toLowerCase()}
									sx={{ mr: 2 }}
								>
									{page}
								</Button>
							) : (
								<Button
									key={page}
									color="inherit"
									component={Link}
									to={`/${page.toLowerCase()}`}
									sx={{ 
										mr: 2,
										color: 'white',
										'&:hover': {
											color: 'success.main',
										}
									}}
								>
									{page}
								</Button>
								)
							)
						)}

					</Box>

					<Box sx={{ flexGrow: 0 }}>

						{
							isAuthenticated ? (
								<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
									<Tooltip title="Open settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Avatar alt="avatar" src="https://i.pravatar.cc/200" />
										</IconButton>
									</Tooltip>
									<Menu
										sx={{ mt: '45px' }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										{settings.map((setting) => (
											setting === 'Logout' ? (
												<MenuItem key={setting} onClick={handleLogout}>
													<Typography textAlign="center">{setting}</Typography>
												</MenuItem>
											) : (
												<MenuItem key={setting} onClick={handleCloseUserMenu}>
													<Typography textAlign="center">{setting}</Typography>
												</MenuItem>
											)
										))}
									</Menu>
								</Box> ) 
								: 
								(
									<Button
									variant="contained"
									color="success"
									component={Link}
									to="/auth"
									sx={{
										fontFamily: 'monospace',
										fontWeight: 700,
										letterSpacing: '.1rem',
										color: 'inherit',
										textDecoration: 'none',
									}}
								>
									Login
								</Button>
								)
						}
						

					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
