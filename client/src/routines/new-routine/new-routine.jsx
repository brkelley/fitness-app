import React, { Component } from 'react';
import Input from '../../components/forms/input.jsx';

class NewRoutine extends Component {
    constructor (props) {
        super(props);

        this.state = {
            routine: {
                routineName: 'Unnamed Routine',
                exercises: []
            }
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                routine: {
                    ...prevState.routine,
                    [name]: value
                }
            })
        );
    }

    render () {
        return (
            <Input
                className="form-control"
                type={'text'}
                name={'routineName'}
                value={this.state.routine.routineName}
                onChange={this.handleInput}
                placeholder="stuff and things" />
        )
    }
}

export default NewRoutine;
