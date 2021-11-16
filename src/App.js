import React from 'react';
import logo from './logo.svg';
import './App.css';

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.increment.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    increment() {
        this.setState((state, props) => {
            return {date: new Date()};
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleDateString()}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Incrementer />
            </header>
        </div>
    );

}

export default App;
