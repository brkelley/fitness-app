import React, { Component } from 'react';

class WorkoutSet extends Component {
    constructor (props) {
        super(props);
    }

    renderWorkoutSets () {
        return this.props.workoutSetData.sets.map((set, index) => {
            return this.renderWorkoutSet(set, index);
        });
    }

    renderWorkoutSet (set, index) {
        return (
            <div className="workout-set-notes">
                <div className="workout-set-index">{index + 1}</div>
                <input className="workout-set-input" placeholder={set.weight} />
                <input className="workout-set-input" placeholder={this.formatRepCountPlaceholder(set.repCountLow, set.repCountHigh)} />
                <i data-feather="check-circle"></i>
            </div>
        );
    }

    formatRepCountPlaceholder (low, high) {
        if (low === high) {
            return low;
        } else if (high === 444) {
            return `${low}+`;
        } else {
            return `${low} - ${high}`;
        }
    }

    render () {
        return (
            <div className="workout-set-wrapper">
                <div className="workout-set-title">
                    {this.props.workoutSetData.workoutName}
                </div>
                {this.renderWorkoutSets().map(e => e)}
            </div>
        );
    }
}

export default WorkoutSet;
