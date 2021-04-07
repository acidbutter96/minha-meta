import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={LogIn} />
        <Route path='/signin' exact component={SignIn} />
    </Switch>
);

export default AuthRoutes;