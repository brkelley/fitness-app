import React, { Component } from 'react';
import AppRoute from './app.route.js';
import style from './style/app.scss';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <AppRoute />
            </div>
        );
    }
}

export default App;