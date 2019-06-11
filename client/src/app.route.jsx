import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import WorkoutTracker from './workout-tracker/workout-tracker.jsx';
import Routines from './routines/routines.jsx';

class AppRoute extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={WorkoutTracker} />
                    <Route path="/routines" component={Routines} />
                </div>
            </Router>
        );
    }
}

export default AppRoute;