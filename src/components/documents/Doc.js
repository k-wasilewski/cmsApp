import React, {Component} from 'react';
import '../../css/App.css';

class Doc extends Component {

    render() {

        return (
            <div className='document'>
                <div className='documentRow'>
                    <div className='div4'>Dokument nr: {this.props.docNr}</div>
                    <div className='div4'>Jakiś inny nr: {this.props.otherNr}</div>
                    <div className='div4'>Status: <span style={{color: "green"}} id="documentStatus">{this.props.status}</span></div>
                </div>
                <div className='documentRow'>
                    <div className='div2'>
                        <p>Dane1: {this.props.data1}</p>
                        <p>Dane2: {this.props.data2}</p>
                        <p>Dane3: {this.props.data3}</p>
                        <p>Dane4: {this.props.data4}</p>
                    </div>
                    <div className='div2' style={{width: "30%"}}>
                        <p>Dane adresowe:</p>
                        <p>{this.props.name}</p>
                        <p>{this.props.zipCode} {this.props.city}</p>
                        <p>{this.props.address}</p>
                    </div>
                </div>
                <div className='documentRow' style={{border: "none"}}>
                    <div className='div2'>
                        <p>Komentarz:</p>
                    </div>
                    <div className='div2'>
                        <p>Data: {this.props.date}</p>
                    </div>
                </div>
                <div className='documentCommemt'>
                    <textarea readOnly={true} value={this.props.comment}/>
                </div>
            </div>
        );
    }
}

export default Doc;
