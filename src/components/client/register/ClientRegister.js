import React, {Component} from 'react';
import '../../../css/App.css';
import ClientHeader from "../ClientHeader";
import {connect} from "react-redux";
import clientReducer from "../../../redux/clientReducer";

class ClientRegister extends Component {
    render() {
        var client = this.props.client;

        if (client!=='') return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain">
                    <span id="p2">Rejestracja nowego użytkownika</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className='col3'>
                            <p>Imię: <input type='text' name='name'/></p>
                            <p>Miejscowość: <input type='text' name='city'/></p>
                            <p>Ulica: <input type='text' name='street'/></p>
                        </div>
                        <div className='col3'>
                            <p>Nazwisko: <input type='text' name='surname'/></p>
                            <p>Kod pocztowy: <input type='text' name='zipCode'/></p>
                            <p>Numer domu: <input type='number' name='houseNo'/></p>
                        </div>
                        <div className='col3'>
                            <p>PESEL: <input type='number' name='PESEL'/></p>
                            <p/>
                            <p>Numer mieszkania: <input type='number' name='aptNo'/></p>
                            <p/>
                        </div>
                        <div className='col3'>
                            Telefon kontaktowy: <input type='number' name='phone'/>
                        </div>
                        <div className='col3'>
                            E-mail: <input type='email' name='email'/>
                        </div>
                        <div className='personalEdit'>
                            <div className='insidePersonalEdit'>
                                <div className='submitWrapper'>
                                    <button type="submit">Zarejestruj</button>
                                </div>
                            </div>
                        </div>
                    </form>
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

export default connect(mapStateToProps)(ClientRegister);
