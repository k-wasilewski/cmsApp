import React, {Component} from 'react';
import '../../css/App.css';
import ConfigModif from "./ConfigModif";

class ConfigList extends Component {

    callbackFunction = (event) => {
        alert('source catalog: '+JSON.stringify(event.selectedSrcCat.value)+
            ', source product: '+JSON.stringify(event.selectedSrcProd.value)+
            ', destination catalog: '+JSON.stringify(event.selectedDestCat.value)+
            ', destination product: '+JSON.stringify(event.selectedDestProd.value)+
            ', valid from: '+(event.validFrom)+'%%% in migrationConfig')
        //TODO
    }

    render() {

        return (
            <div className="App">
                <div className="tab">
                    <div className="wrapList">
                        <h3>Lista konfiguracji</h3>
                        <div className='list'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='th'>aaaaaaaaaaaa</th>
                                        <th className='th'>bbbbbbbbbbb</th>
                                        <th className='th'>cccccccccc</th>
                                        <th className='thShort'>ddddddddddddddd</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ffsgfd</td>
                                        <td>dfggfdgfd</td>
                                        <td>3333333334443</td>
                                        <td>fsfsdfsdf</td>
                                        <td><ConfigModif parentCallback={this.callbackFunction}/></td>
                                        <td><button>Usuń</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfigList;
