import React, {Component} from 'react';
import './css/App.css';
import logo from './img/cmsApp_logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pwd: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        this.props.parentCallback(this.state.login, this.state.pwd);

        alert("login: "+this.state.login+
                "\nhasło: "+this.state.pwd);
    }

    handleLoginChange = (event) => {
        this.setState({login: event.target.value});
    }

    handlePwdChange = (event) => {
        this.setState({pwd: event.target.value});
    }

    render () {
        return (
            <div id='loginDiv'>
                <div id='loginHeader'>
                    <img src={logo} id='logo' alt='nc+ logo' />
                </div>
                <div id='loginBody'>
                    <table style={{width: "100%"}}>
                        <tbody>
                            <tr>
                                <td style={{width: "40%"}}>
                                    <label htmlFor="user">Login:</label>
                                </td>
                                <td>
                                    <input type='text' id='user' name='user' onChange={this.handleLoginChange}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: "40%"}}>
                                    <label htmlFor="password">Hasło:</label>
                                </td>
                                <td>
                                    <input id='password' type='password' name='password' onChange={this.handlePwdChange}/><br/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id='loginBtn'>
                        <button onClick={this.handleSubmit}>Loguj</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
