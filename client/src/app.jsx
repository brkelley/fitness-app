import React, { Component } from 'react';
import AppRoute from './app.route.jsx';
import style from './style/app.scss';
import Header from './components/header/header.jsx';

class App extends Component {
    render () {
        return (
            <div className="app-wrapper">
                <Header />
                <AppRoute />
            </div>
        );
    }
}

export default App;