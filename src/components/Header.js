import React, {Component} from 'react';
import '../css/App.css';
import {NavLink, Redirect} from "react-router-dom";

class Header extends Component {

    handleLogout = () => {
        sessionStorage.clear();
        this.props.parentCallback();
    }

    render() {
        if (this.state!==null && this.state.logout===true) {
            return (<Redirect to="/" push={true}/>)
        } else return (
            <div>
                <header className="App-header">
                    zalogowany: <span className="user">{this.props.username}</span>
                    <button onClick={this.handleLogout} className="logout">wyloguj</button>
                    <div className="tabs-header">
                        <nav>
                            <NavLink exact to={`/`} className="tab-header">
                                <button className='tab-header'> Obsługa klienta</button>
                            </NavLink>
                            <NavLink to={`/documents`} className="tab-header">
                                <button className='tab-header'> Dokumenty</button>
                            </NavLink>
                            <NavLink to={`/files`} className="tab-header">
                                <button className='tab-header'> Pliki</button>
                            </NavLink>
                            <NavLink to={`/modifications`} className="tab-header">
                                <button className='tab-header'> Modyfikacje</button>
                            </NavLink>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
