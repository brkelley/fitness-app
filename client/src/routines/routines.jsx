import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { retrieveAllRoutines } from './routines.util.js';

import NewRoutine from './new-routine/new-routine.jsx';

class Routines extends Component {
    constructor (props) {
        super(props);

        this.state = {
            path: props.match.path,
            routines: [],
            emptyRoutinePrompt: this.renderEmptyRoutine()
        };
    }

    componentDidMount () {
        retrieveAllRoutines().then(({ data: routines }) => {
            this.state.routines = routines;
        });
    }

    renderEmptyRoutine () {
        return (
            <div className="empty-routines-wrapper">
                <h1>No routines created</h1>
                <div>
                    <Link to="/routines/new">
                        <button className="workout-now-button">Create new one</button>
                    </Link>
                </div>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.renderEmptyRoutine()}
            </div>
        );
    }
}

export default Routines;
