import React, {Component} from 'react';
import './css/App.css';
import Header from "./components/Header";
import Router from "./Router";
import Login from "./Login";

class App extends Component {

    handleCallbackFromLogin = (login, pwd) => {
        /*axios.post(...).then( if response===(200) ) { */

        window.localStorage.setItem('login', login);
        //set token?
        this.forceUpdate();
    }

    handleCallbackFromHeader = () => {
        window.localStorage.clear();
        this.forceUpdate();
    }

    render () {
        if (window.localStorage.getItem('login')!==null) {
            return (
                <div className="App">
                    <Header username = {window.localStorage.getItem('login')} parentCallback = {this.handleCallbackFromHeader} />
                    <Router />
                </div>
            );
        } else return (
            <Login parentCallback = {this.handleCallbackFromLogin} />
        )
    }
}

export default App;
