import React, {Component} from 'react';
import '../../../css/App.css';
import ClientHeader from "../ClientHeader";
import 'react-dropdown/style.css';
import ClientHistoryTable from "./ClientHistoryTable";
import {connect} from "react-redux";

class ClientHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operations: 'wszystkie',
            operator: 'dowolny',
            date: '',
            fromDate: '',
            toDate: '',
            canal: 'dowolny',
            filter: false,
            dates: ''
        };

        this.datesOnChange = this.datesOnChange.bind(this);
        this.operationsOnChange = this.operationsOnChange.bind(this);
        this.operatorOnChange = this.operatorOnChange.bind(this);
        this.dateOnChange = this.dateOnChange.bind(this);
        this.fromDateOnChange = this.fromDateOnChange.bind(this);
        this.toDateOnChange = this.toDateOnChange.bind(this);
        this.canalOnChange = this.canalOnChange.bind(this);
        this.filterOnChange = this.filterOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('operacje: ' + this.state.operations +
        ', operator: ' + this.state.operator +
        ', data: ' + this.state.date +
            ', od: ' + this.state.fromDate +
            ', do: ' + this.state.toDate +
        ', canał: ' + this.state.canal +
        ', filtr: ' + this.state.filter);
        if (event!==undefined) event.preventDefault();
    }

    datesOnChange = (event) => {
        this.setState({dates: event.target.value});
    }

    operationsOnChange = (event) => {
        this.setState({operations: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    operatorOnChange = (event) => {
        this.setState({operator: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    canalOnChange = (event) => {
        this.setState({canal: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    dateOnChange = (event) => {
        this.setState({date: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    fromDateOnChange = (event) => {
        this.setState({fromDate: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    toDateOnChange = (event) => {
        this.setState({toDate: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    filterOnChange = (event) => {
        this.setState({filter: event.target.value}, function () {
            this.handleSubmit();
        });
    }

    callbackFunction = (row) => {
        this.setState({
            selOperation: row.operation,
            selDate: row.date,
            selCanal: row.canal,
            selOperator: row.operator,
            selCost: row.cost,
            selAccNo: row.accNo,
            selRechargeDate: row.rechargeDate
        })
    }

    render() {
        var client=this.props.client;

        var datePicker = <div/>
        if (this.state.dates==='data') {
            datePicker = <input id='date' name='date' type='date' onChange={this.dateOnChange}/>
        }
        else if (this.state.dates==='przedział') {
            datePicker = (<div>
                od <input id='fromDate' name='date' type='date' onChange={this.fromDateOnChange}/>
                do <input id='toDate' name='date' type='date' onChange={this.toDateOnChange}/>
            </div>)
        }

        if (client!=='') return (
            <div className="App">
                <ClientHeader />
                <div className="clientMain">
                    <div className='col'>
                        <h3>Historia operacji użytkownika</h3>
                        <div className='filter'>
                            <form onSubmit={this.handleSubmit}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Wyświetlane są:
                                            </td>
                                            <td>
                                                <span className='dropdown'>
                                                    <select value={this.state.operations} onChange={this.operationsOnChange}>
                                                        <option value="wszystkie">wszystkie operacje</option>
                                                        <option value="lime">Lime</option>
                                                        <option value="coconut">Coconut</option>
                                                        <option value="mango">Mango</option>
                                                    </select>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                wykonane:
                                            </td>
                                            <td>
                                                <span className='dropdown'>
                                                    <select value={this.state.dates} onChange={this.datesOnChange}>
                                                        <option value="brak">brak ograniczeń czasowych</option>
                                                        <option value="data">data</option>
                                                        <option value="przedział">przedział czasowy</option>
                                                    </select>
                                                </span>
                                                {datePicker}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                przez:
                                            </td>
                                            <td>
                                                <span className='dropdown'>
                                                    <select value={this.state.operator} onChange={this.operatorOnChange}>
                                                        <option value="dowolny">dowolnego operatora</option>
                                                        <option value="lime">Lime</option>
                                                        <option value="coconut">Coconut</option>
                                                        <option value="mango">Mango</option>
                                                    </select>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                za pośrednictwem:
                                            </td>
                                            <td>
                                                <span className='dropdown'>
                                                    <select value={this.state.canal} onChange={this.canalOnChange}>
                                                        <option value="dowolny">dowolnego kanału</option>
                                                        <option value="lime">Lime</option>
                                                        <option value="coconut">Coconut</option>
                                                        <option value="mango">Mango</option>
                                                    </select>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='formRight'>
                                    <label id='all1' className='all' htmlFor='filter'>zastosuj jakiś filtr</label>
                                    <input id='all2' type='checkbox' className='all' name='filter'
                                    onClick={this.filterOnChange}/>
                                </div>
                                {/*<div className='filterBtnDiv'><button id='filterBtn' type='submit'>Filtruj</button></div>*/}
                            </form>
                        </div>
                        <ClientHistoryTable parentCallback = {this.callbackFunction} />
                    </div>
                    <div className='col'>
                        <p className='historyInfo'>
                            Operacja: {this.state.selOperation}<br/>
                            Data: {this.state.selDate}<br/>
                            Kanał: {this.state.selCanal}<br/>
                            Operator: {this.state.selOperator}<br/>
                            Data: {this.state.selRechargeDate}
                        </p>
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

export default connect(mapStateToProps)(ClientHistory);
