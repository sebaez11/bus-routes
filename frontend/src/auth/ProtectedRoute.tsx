import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute = ( { children }: ProtectedRouteProps ) => {
    
    const location = useLocation();

    const { isAuthenticated } = useAppSelector(state => state.auth);

    if (isAuthenticated) {
        return <>{children}</>
    }

    return <Navigate to="/auth" state={{ from: location }} />

}

export default ProtectedRoute;