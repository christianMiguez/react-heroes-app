import React from 'react'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const AppRouter = () => {
    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route path="/" component={ DashboardRoutes } />

            </Switch>
        </div>
    </Router>
    )
}
