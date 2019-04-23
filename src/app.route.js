import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import WorkoutTracker from './workout-tracker/workout-tracker.component.js';

class AppRoute extends Component {
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={WorkoutTracker}/>
            </Router>
        );
    }
}

export default AppRoute;