import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import WorkoutTracker from './workout-tracker/workout-tracker.jsx';
import Routines from './routines/routines.jsx';
import NewRoutine from './routines/new-routine/new-routine.jsx';

class AppRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={WorkoutTracker} />
                    <Route exact path="/routines" component={Routines} />
                    <Route exact path="/routines/new" component={NewRoutine} />
                </div>
            </Router>
        );
    }
}

export default AppRoute;