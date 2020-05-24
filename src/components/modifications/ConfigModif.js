import React, {Component} from 'react';
import '../../css/App.css';
import Popup from "reactjs-popup";
import Select from 'react-select';

class ConfigModif extends Component {
    constructor() {
        super();
        this.state = {
            a: { value: 'all', label: '(Wszystkie)' },
            b: { value: 'all', label: '(Wszystkie)' },
            c: { value: 'all', label: '(Wszystkie)' },
            d: { value: 'all', label: '(Wszystkie)' },
            date: '',

            isOpen: false
        };

        this.handleAChange = this.handleAChange.bind(this);
        this.handleBChange = this.handleBChange.bind(this);
        this.handleCChange = this.handleCChange.bind(this);
        this.handleDChange = this.handleDChange.bind(this);
        this.handleDatetimeChange = this.handleDatetimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        if (this.props.parentCallback!==undefined) {
            this.props.parentCallback(this.state);
        }
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    handleAChange = selectedOption => {
        this.setState({ a: selectedOption });
    };

    handleBChange = selectedOption => {
        this.setState({ b: selectedOption });
    };

    handleCChange = selectedOption => {
        this.setState({ c: selectedOption });
    };

    handleDChange = selectedOption => {
        this.setState({ d: selectedOption });
    };

    handleDatetimeChange({ target }) {
        this.setState({
            date: target.value
        });
    }

    render () {
        const srcCatOptions = [
            { value: 'all', label: '(Wszystkie)' },
            { value: 'b', label: 'bbbbbbb' },
            { value: 'c', label: 'ccccccccccc' },
            { value: 'd', label: 'dddddddddddd' },
        ];

        const srcProdOptions = [
            { value: 'all', label: '(Wszystkie)' },
            { value: 'b', label: 'bbbbbbb' },
            { value: 'c', label: 'ccccccccccc' },
            { value: 'd', label: 'dddddddddddd' },
        ];

        const destCatOptions = [
            { value: 'all', label: '(Wszystkie)' },
            { value: 'b', label: 'bbbbbbb' },
            { value: 'c', label: 'ccccccccccc' },
            { value: 'd', label: 'dddddddddddd' },
        ];

        const destProdOptions = [
            { value: 'all', label: '(Wszystkie)' },
            { value: 'b', label: 'bbbbbbb' },
            { value: 'c', label: 'ccccccccccc' },
            { value: 'd', label: 'dddddddddddd' },
        ];

        return (
            <Popup trigger={<button> Modyfikuj</button>}
                   on='click'
                   open={this.state.isOpen}
                   onOpen={this.handleOpen}
                   position="left center">
                <div>
                    aaaaaaaaaaaaaa<Select
                        value={this.state.a}
                        onChange={this.handleAChange}
                        options={srcCatOptions}
                    />
                    bbbbbbbbbbbb<Select
                        value={this.state.b}
                        onChange={this.handleBChange}
                        options={srcProdOptions}
                    />
                    ccccccccccccc<Select
                        value={this.state.c}
                        onChange={this.handleCChange}
                        options={destCatOptions}
                    />
                    ddddddddd<Select
                        value={this.state.d}
                        onChange={this.handleDChange}
                        options={destProdOptions}
                    />
                    Data: <input type='datetime-local' onChange={ this.handleDatetimeChange }/>
                    <button onClick={this.handleSubmit}>Wykonaj</button>
                    <button onClick={this.handleClose}>Anuluj</button>
                </div>
            </Popup>
        );
    }
}

export default ConfigModif;
