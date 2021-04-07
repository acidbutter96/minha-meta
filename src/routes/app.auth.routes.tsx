import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={LogIn} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/panel/goals' >
            <Redirect to={{
                pathname: '/'
            }} />
        </Route>
        <Route path='/dashboard' >
            <Redirect to={{
                pathname: '/'
            }} />
        </Route>
    </Switch>
);

export default AuthRoutes;