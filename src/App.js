import React from 'react';
import './App.css';

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timer: null
        };
        this.toggleAction = this.toggleAction.bind(this);
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
        this.setState({timer: window.setInterval(this.increment.bind(this), 500)});
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
                <button onClick={this.toggleAction} className={"btn-" + this.classButton()}>{this.labelButton()}</button>
            </div>
        );
    }

}

class Field extends React.Component {

    render() {
        return (
            <div>
                <label className={"label"}>{this.props.children}</label>
                <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} className={"form-control"} />
            </div>
        );
    }

}

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert("Mail send from " + this.state.name + " to " + this.state.email + " with message : " + this.state.message);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="name" type="text" value={this.state.name} onChange={this.handleChange}>Nom</Field>
                <Field name="email" type="email" value={this.state.email} onChange={this.handleChange}>Email</Field>
                <Field name="message" type="text" value={this.state.message} onChange={this.handleChange}>Message</Field>
                <br />
                <button type={"submit"} className={"btn-pause"}>Envoyer</button>
            </form>
        );
    }

}

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Incrementer />

                <br />

                <Form />

            </header>
        </div>
    );

}

export default App;
