import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import WorkoutTracker from './workout-tracker/workout-tracker.jsx';

class AppRoute extends Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <Route path="/" component={WorkoutTracker}/>
            </Router>
        );
    }
}

export default AppRoute;