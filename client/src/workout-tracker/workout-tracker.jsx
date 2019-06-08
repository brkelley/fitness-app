import React, { Component } from 'react';
import WorkoutSet from './workout-set/workout-set.jsx';
import { retrieveAllWorkoutRoutines } from './workout-tracker.util.js';

class WorkoutTracker extends Component {
    constructor (props) {
        super(props);

        this.state = {
            legDayRender: []
        }
    }

    componentDidMount () {
        retrieveAllWorkoutRoutines().then(routines => {
            this.setState({
                legDayRender: routines.data.map((routine) => <WorkoutSet key={routine._id} workoutSetData={routine} />)
            });
        });
    }

    render () {
        const { legDayRender } = this.state;
        if (!legDayRender) return (<h1>BUTTS</h1>);
        return (
            <div>
                { this.state.legDayRender }
            </div>
        );
    }
}

export default WorkoutTracker;