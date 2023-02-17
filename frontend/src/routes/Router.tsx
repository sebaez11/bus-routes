import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
	{
		path: '/home',
		element: <Dashboard />,
	},
]);

export default router;
