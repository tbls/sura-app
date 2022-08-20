import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from '../auth/routes/AuthRouter';
import { DashboardRouter } from '../dashboard/routes/DashboardRouter';

export const AppRouter = () => {
	const { isLogged } = useSelector((state) => state.auth);
	
	return (
		<Routes>

			{
				isLogged 
				? <Route path="/*" element={<DashboardRouter />} />
				: <Route path="auth/*" element={<AuthRouter />} />
			}

			<Route path="/*" element={<Navigate to="/auth/login" />} />

		</Routes>
	);
};
