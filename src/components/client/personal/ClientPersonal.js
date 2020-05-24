import React, {Component} from 'react';
import '../../../css/App.css';
import ClientHeader from "../ClientHeader";
import {connect} from "react-redux";

class ClientPersonal extends Component {

    verifyPhone = () => {
        document.getElementById('phoneNonActive').style.visibility = 'hidden'
        document.getElementById('phoneActive').style.visibility = 'visible'
    }

    verifyEmail = () => {
        document.getElementById('emailNonActive').style.visibility = 'hidden'
        document.getElementById('emailActive').style.visibility = 'visible'
    }

    render() {
        var client=this.props.client;

        if (client!=='') return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain">
                    <div className='col3'>
                        <p>Imię:</p>
                        <p>Miejscowość:</p>
                        <p>Ulica:</p>
                    </div>
                    <div className='col3'>
                        <p>Nazwisko:</p>
                        <p>Kod pocztowy:</p>
                        <p>Numer domu:</p>
                    </div>
                    <div className='col3'>
                        <p>PESEL:</p>
                        <p/>
                        <p>Numer mieszkania:</p>
                        <p/>
                    </div>
                    <div className='personalEdit'>
                        <div className='insidePersonalEdit'>
                            <div className='col'>
                                Telefon kontaktowy:
                                <p id='phoneNonActive'>nie zweryfikowany</p>
                                <p id='phoneActive'>zweryfikowany</p>
                                <button onClick={this.verifyPhone}>Zweryfikuj</button>
                            </div>
                            <div className='col'>
                                E-mail:
                                <p id='emailNonActive'>nie zweryfikowany</p>
                                <p id='emailActive'>zweryfikowany</p>
                                <button onClick={this.verifyEmail}>Zweryfikuj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        else return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        client: state.clientReducer.client
    };
}

export default connect(mapStateToProps)(ClientPersonal);
