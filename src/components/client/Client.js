import React, {Component} from 'react';
import '../../css/App.css';
import ClientPersonal from "./personal/ClientPersonal";

class Client extends Component {

    render() {

        return (
            <div>
                <ClientPersonal />
            </div>
        );
    }
}

export default Client;
