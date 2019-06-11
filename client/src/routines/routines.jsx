import React, { Component } from 'react';
import { retrieveAllRoutines } from './routines.util.js';

class Routines extends Component {
    constructor (props) {
        super(props);

        this.state = {
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
                    <button className="workout-now-button">Create new one</button>
                </div>
            </div>
        );
    }

    render () {
        if (this.state.routines.length === 0) {
            return this.state.emptyRoutinePrompt;
        } else {
            return <h1>butts</h1>
        }
    }
}

export default Routines;
