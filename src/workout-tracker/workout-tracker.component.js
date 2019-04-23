import React, { Component } from 'react';

class WorkoutTracker extends Component {
    constructor () {
        this.legDay = {
            name: 'Leg Day',
            sets: [
                {
                    workoutName: 'Squat',
                    workoutId: 1,
                    sets: [
                        { repCount: 5, weight: 205 },
                        { repCount: 5, weight: 205 },
                        { repCount: 7, weight: 205 }
                    ]
                },
                {
                    workoutName: 'Leg press',
                    workoutId: 2,
                    sets: [
                        { repCount: 12, weight: 265 },
                        { repCount: 12, weight: 265 },
                        { repCount: 12, weight: 265 }
                    ]
                },
                {
                    workoutName: 'Romanian deadlift',
                    workoutId: 3,
                    sets: [
                        { repCount: 12, weight: 40 },
                        { repCount: 12, weight: 40 },
                        { repCount: 12, weight: 40 }
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <h1 className="workout-wrapper">Hello World!</h1>
        );
    }
}

export default WorkoutTracker;