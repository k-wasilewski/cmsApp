import React, {Component} from 'react';
import '../../../css/App.css';
import ClientHeader from "../ClientHeader";
import {connect} from "react-redux";

class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            houseNo: '',
            aptNo: '',
            zipCode: '',
            city: 'any',
            NIP: false
        };

        this.nameOnChange = this.nameOnChange.bind(this);
        this.streetOnChange = this.streetOnChange.bind(this);
        this.houseNoOnChange = this.houseNoOnChange.bind(this);
        this.aptNoOnChange = this.aptNoOnChange.bind(this);
        this.zipCodeOnChange = this.zipCodeOnChange.bind(this);
        this.cityOnChange = this.cityOnChange.bind(this);
        this.NIPOnChange = this.NIPOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        alert('imię i nazwisko: ' + this.state.name +
            ', ulica: ' + this.state.street +
            ', numer domu: ' + this.state.houseNo +
            ', numer mieszkania: ' + this.state.aptNo +
            ', kod pocztowy: ' + this.state.zipCode +
            ', miasto: ' + this.state.city +
            ', NIP: ' + this.state.NIP);
        if (event!==undefined) event.preventDefault();
    }

    nameOnChange = (event) => {
        this.setState({name: event.target.value});
    }

    streetOnChange = (event) => {
        this.setState({street: event.target.value});
    }

    houseNoOnChange = (event) => {
        this.setState({houseNo: event.target.value});
    }

    aptNoOnChange = (event) => {
        this.setState({aptNo: event.target.value});
    }

    zipCodeOnChange = (event) => {
        this.setState({zipCode: event.target.value});
    }

    cityOnChange = (event) => {
        this.setState({city: event.target.value});
    }

    NIPOnChange = (event) => {
        this.setState({NIP: event.target.value});
    }

    render() {
        var client=this.props.client;

        if (client!=='') return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain">
                    <br/>
                    <span id="p1">Krok 1 z 1</span>
                    <span id="p2">Jakiś formularz</span>

                    <div id="p4">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><span>Imię i nazwisko: </span></td>
                                        <td><span className='span2'><input type='text' name='name' onChange={this.nameOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Ulica: </span></td>
                                        <td><span className='span2'><input type='text' name='street' onChange={this.streetOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Numer domu: </span></td>
                                        <td><span><input type='number' name='houseNo' onChange={this.houseNoOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Numer mieszkania: </span></td>
                                        <td><span><input type='number' name='aptNo' onChange={this.aptNoOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Kod pocztowy: </span></td>
                                        <td><span><input type='text' name='zipCode' onChange={this.zipCodeOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Miejscowość: </span></td>
                                        <td><span><input type='text' name='city' onChange={this.cityOnChange}/></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Numer NIP: </span></td>
                                        <td><span><input type='text' name='NIP' onChange={this.NIPOnChange}/></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="invoiceBtns">
                                <a href="/client_form"><button type="button">Anuluj</button></a>
                                <button id='formSubmitBtn' type='submit'>Wykonaj</button>
                            </div>
                        </form>
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

export default connect(mapStateToProps)(ClientForm);
