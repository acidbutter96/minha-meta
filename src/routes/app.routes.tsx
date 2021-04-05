import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Sales from '../pages/Sales';
import Goals from '../pages/Goals';

const AppRoutes: React.FC = () =>
    <Layout>
        <Switch>
            <Route path='/charts' exact component={Dashboard} />
            <Route path='/sales' exact component={Sales} />
            <Route path='/goals' exact component={Goals} />
        </Switch>
    </Layout>

export default AppRoutes;