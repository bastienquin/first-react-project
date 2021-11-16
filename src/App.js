import React from 'react';
import logo from './logo.svg';
import './App.css';

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
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
            return {counter: state.counter + 1};
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        );
    }

}

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World !</p>
                <Incrementer />
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
        </div>
    );

}

export default App;
