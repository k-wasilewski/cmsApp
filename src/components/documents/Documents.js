import React, {Component} from 'react';
import '../../css/App.css';
import DocumentsTable from "./DocumentsTable";
import {WaveLoading} from "react-loadingg";

class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter1on: false,
            filter2on: false,

            filter1: '',
            filter2: '',
            type: '',
            order1: '',
            order2: '',

            loading: false
        }
    }

    typeOnChange = (event) => {
        this.setState({type: event.target.value});
    }

    order1OnChange = (event) => {
        this.setState({order1: event.target.value});
    }

    order2OnChange = (event) => {
        this.setState({order2: event.target.value});
    }

    filter1On = () => {
        this.setState({
            filter1on: !this.state.filter1on
        })
    }

    filter2On = () => {
        this.setState({
            filter2on: !this.state.filter2on
        })
    }

    filter1OnChange = (event) => {
        this.setState({filter1: event.target.value});
    }

    filter2OnChange = (event) => {
        this.setState({filter2: event.target.value});
    }

    handleSubmit = () => {
        alert("typ: "+this.state.type+
            ", filtr1: "+this.state.filter1+
            ", filtr2: "+this.state.filter2+
            ", sortuj1: "+this.state.order1+
            ", sortuj2: "+this.state.order2)

        var documents = [];
        for (var i=0; i<5; i++) {
            documents.push({
                index: {i},
                docNr: 666,
                otherNr: 0,
                status: 'zaakceptowany',
                data1: 'fdsfsd',
                data2: 'fsdfsdfsd',
                data3: '23423423',
                data4: '11 1140 15f fsdf',
                name: 'Kuba Wasilewski',
                zipCode: '02-758',
                city: 'Warszawa',
                address: 'Andersa 9',
                comment: 'dobre!',
                ccDate: '2020-03-01',
            })
        }
        this.setState({documents: documents, loading: true}, function () {
            this.forceUpdate();
        })
        var that = this;
        setTimeout(function () {
            that.setState({loading: false}, function () {
                this.forceUpdate();
            })
        }, 1000)
    }

    render() {
        var documents = []
        if (this.state.documents!==undefined) documents = this.state.documents;

        if (this.state.loading) return (<WaveLoading />)
        else return (
            <div className="App">
                <div className="tab">
                    <div className='col7' style={{width: "8%"}}>
                        Wnioski:
                    </div>
                    <div className='col7' style={{width: "10%"}}>
                        <select name='type' onChange={this.typeOnChange}>
                            <option value='any'>dowolny</option>
                            <option value='2'>frefer</option>
                            <option value='3'>htrhrt</option>
                            <option value='4'>wrtwtwtre</option>
                        </select>
                    </div>
                    <div className='col7' style={{width: "19%"}}>
                        <input type='checkbox' onClick={this.filter1On} name='filter1'/>
                        filtr1: <br/>
                        <input type='text' disabled={!this.state.filter1on} onChange={this.filter1OnChange} name='filter1'/>
                    </div>
                    <div className='col7' style={{width: "19%"}}>
                        <input type='checkbox' onClick={this.filter2On} name='filter2'/>
                        filtr2: <br/>
                        <input type='text' disabled={!this.state.filter2on} onChange={this.filter2OnChange} name='filter2'/>
                    </div>
                    <div className='col7' style={{width: "12%"}}>
                        Sortowanie po:
                    </div>
                    <div className='col7'>
                        <select name='order1' onChange={this.order1OnChange}>
                            <option value='submitDate'>dacie</option>
                            <option value='2'>gfdgdfg</option>
                            <option value='3'>dfgdfg</option>
                            <option value='4'>gdfgdfgf</option>
                        </select>
                        <select name='order2' onChange={this.order2OnChange}>
                            <option value='desc'>malejąco</option>
                            <option value='asc'>rosnąco</option>
                            <option value='3'>dfgdfg</option>
                            <option value='4'>gdfgdfgf</option>
                        </select>
                    </div>
                    <div className='col7'>
                        <button onClick={this.handleSubmit}>Odśwież</button>
                    </div>
                    <DocumentsTable documents={documents} />
                </div>
            </div>
        );
    }
}

export default Documents;
