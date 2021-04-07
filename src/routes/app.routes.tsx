import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Panel from '../pages/Panel';

const AppRoutes: React.FC = () =>
    <Layout>
        <Switch >
            <Route path="/" exact>
                <Redirect to={{
                    pathname: '/charts'
                }} />
            </Route>
            <Route path='/charts' exact>
                <Dashboard />
            </Route>
            <Route path='/panel/:mode' exact component={Panel} />
        </Switch>
    </Layout>

export default AppRoutes;