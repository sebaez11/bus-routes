import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../auth/ProtectedRoute';

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
		path: '/administración',
		element: <ProtectedRoute><AdminPanel /></ProtectedRoute>
	},
	{
		path: '*',
		element: <App />,
	}
]);

export default router;
