import React from 'react';
import logo from './logo.svg';
import './App.css';

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timer: null
        };
    }

    componentDidMount() {
        this.play();
    }

    componentWillUnmount() {
        window.clearInterval(this.state.timer);
    }

    increment() {
        this.setState({date: new Date()});

    }

    play() {
        window.clearInterval(this.state.timer);
        this.setState({timer: window.setInterval(this.increment.bind(this), 1000)});
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({timer: null});
    }

    toggleAction() {
        this.state.timer ? this.pause() : this.play();
    }

    labelButton() {
        return this.state.timer ? 'Pause' : 'Play';
    }

    classButton() {
        return this.state.timer ? 'pause' : 'play';
    }


    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleDateString()}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.toggleAction.bind(this)} className={"btn-" + this.classButton()}>{this.labelButton()}</button>
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
