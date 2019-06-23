import React, { Component } from 'react';

class Input extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <input
                className="form-input"
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder} />
        );
    }
}

export default Input;
