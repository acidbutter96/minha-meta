import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import AppRoutes from './app.routes';
import AuthAppRoutes from './app.auth.routes';

const Routes: React.FC = () => {
    const { logged } = useAuth();

    return (
        <BrowserRouter>
            {logged ? <AppRoutes /> : <AuthAppRoutes />}
        </BrowserRouter>
    );
}

export default Routes;