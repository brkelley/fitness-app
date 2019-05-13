import React, { Component } from 'react';
import WorkoutSet from './workout-set/workout-set.jsx';

class WorkoutTracker extends Component {
    constructor (props) {
        super(props);

        this.legDay = {
            name: 'Leg Day',
            workouts: [
                {
                    workoutName: 'Squat',
                    workoutId: 1,
                    sets: [
                        { repCount: 5, weight: 205, repCountLow: 5, repCountHigh: 5 },
                        { repCount: 5, weight: 205, repCountLow: 5, repCountHigh: 5 },
                        { repCount: 7, weight: 205, repCountLow: 5, repCountHigh: 444 }
                    ]
                },
                {
                    workoutName: 'Leg press',
                    workoutId: 2,
                    sets: [
                        { repCount: 12, weight: 265, repCountLow: 8, repCountHigh: 12 },
                        { repCount: 12, weight: 265, repCountLow: 8, repCountHigh: 12 },
                        { repCount: 12, weight: 265, repCountLow: 8, repCountHigh: 12 }
                    ]
                },
                {
                    workoutName: 'Romanian deadlift',
                    workoutId: 3,
                    sets: [
                        { repCount: 12, weight: 40, repCountLow: 8, repCountHigh: 12 },
                        { repCount: 12, weight: 40, repCountLow: 8, repCountHigh: 12 },
                        { repCount: 12, weight: 40, repCountLow: 8, repCountHigh: 12 }
                    ]
                }
            ]
        };
    }

    render () {
        const { legDay } = this;
        return (
            <div>
                { legDay.workouts.map((element) => <WorkoutSet key={element.workoutId} workoutSetData={element} />) }
            </div>
        );
    }
}

export default WorkoutTracker;