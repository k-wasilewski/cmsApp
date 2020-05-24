import React, {Component} from 'react';
import '../../css/App.css';
import logo from '../../img/cmsApp_logo.png';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { setClient } from "../../redux/actions";
import clientReducer from "../../redux/clientReducer";

class ClientHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    newSearch = () => {
        this.props.setClient('');
        this.setState({
            value: ''
        })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        var client = (this.state.value);
        this.props.setClient(client);
        event.preventDefault();
    }

    render() {

        var searchBtnLabel = 'Szukaj';
        var inputBtn = <button id='inputBtn' type="button" onClick={this.handleSubmit}> {searchBtnLabel}</button>;
        var inputTxtOrField = <input id='inputField' type="text" value={this.state.value}
                                     onChange={this.handleChange} />;
        var tabsHeader = <div className="tabs-clientHeader"/>

        if (this.props.client!=='') {
            searchBtnLabel = 'Nowe wyszukiwanie';
            inputBtn = <button id='inputBtn' type="button" onClick={this.newSearch}> {searchBtnLabel}</button>
            inputTxtOrField = <span id='inputTxt'>{this.props.client}</span>
            tabsHeader = <div className="tabs-clientHeader">
                <nav>
                    <NavLink to={{
                        pathname: '/client_register'
                    }} className="tab-clientHeader">
                        <button className='tab-header'> Rejestracja</button>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/client_personal'
                    }} className="tab-clientHeader">
                        <button className='tab-header'> Dane osobowe</button>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/client_history'
                    }} className="tab-clientHeader">
                        <button className='tab-header'> Historia</button>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/client_service'
                    }} className="tab-clientHeader">
                        <button className='tab-header'> Serwis</button>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/client_form'
                    }} className="tab-clientHeader">
                        <button className='tab-header'> Jakiś formularz</button>
                    </NavLink>
                </nav>
            </div>;
        }

        return (
            <div className="clientHeader">
                <div className="searchingHeader">
                    <img src={logo} id='logo' alt='nc+ logo' />
                    <form onSubmit={this.handleSubmit}>
                        <select id="inputType" placeholder="sth" defaultValue="nagraConax">
                            <option value="decoderCan">Nazwisko</option>
                            <option value="bankAcc">Identyfikator</option>
                        </select>

                        {inputTxtOrField}

                        {inputBtn}

                    </form>
                </div>

                {tabsHeader}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        client: state.clientReducer.client
    };
}

const mapDispatchToProps = {
    setClient
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientHeader);