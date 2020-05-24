import React, {Component} from 'react';
import '../../../css/App.css';
import ClientHeader from "../ClientHeader";
import {connect} from "react-redux";
import clientReducer from "../../../redux/clientReducer";

class ClientService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
    }

    editForm = (event) => {
        event.preventDefault();
        this.setState({
            disabled: !this.state.disabled
        })
    }

    handleSubmit = () => {

    }

    render() {
        var disabled = true;
        if (this.state.disabled===false) disabled = false;

        var client = this.props.client;

        var editBtn = <button style={{float: "left", marginLeft: "30vh", color: "red"}} onClick={this.editForm}>Edytuj</button>
        if (disabled) {
            editBtn = <button style={{float: "left", marginLeft: "30vh"}} onClick={this.editForm}>Edytuj</button>
        }

        if (client!=='') return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain">
                    <form id='clientServiceForm' onSubmit={this.handleSubmit}>
                        <div className='col'>
                            <p>
                                Numer konta bankowego do wpłat: <span className='vals'>83 1204 4049 8475 8743 7459 5333</span>
                            </p>
                            <br/>
                            <p>
                                Jakieś dane statyczne1: <span className='vals'>regerg</span>
                            </p>
                            <p>
                                Jakieś dane statyczne2: <span className='vals'>gregreg</span>
                            </p>
                            <p>
                                Jakieś dane statyczne3: <span className='vals'>rger</span>
                            </p>
                            <p>
                                Jakieś dane statyczne4: <span className='vals'>regerg</span>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                Jakieś dane dynamiczne1: <input disabled={disabled} name='decoderNcam' value='9438481232'/>
                            </p>
                            <p>
                                Jakieś dane dynamiczne2: <input disabled={disabled} name='macAddress' value='94735AY7367'/>
                            </p>
                            <p>
                                Jakieś dane dynamiczne3: <input disabled={disabled} name='chipId' value='4234432445'/>
                            </p>
                            <p>
                                Jakieś dane dynamiczne4: <select disabled={disabled} name='model'>
                                <option value='1'>rfre</option>
                                <option value='2'>rgergr</option>
                                <option value='3'>regergeger</option>
                            </select>
                            </p>
                        </div>
                        <div className='serviceSubmitBtns'>
                            {editBtn}
                            <button style={{float: "right", marginRight: "50vh"}} disabled={disabled} type='submit'>Zapisz</button>
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

export default connect(mapStateToProps)(ClientService);
