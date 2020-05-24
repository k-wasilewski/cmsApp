import React, {Component} from 'react';
import '../../css/App.css';
import Pagination from "react-pagination-library";
import { WaveLoading } from 'react-loadingg';

class Files extends Component {
    constructor(props) {
        super(props);

        var files = [{
            date: '2012-09-09',
            transferFile: 'filename1.txt',
            orderFile: 'filename2.txt'
        }, {
            date: '2010-03-03',
            transferFile: 'filename3.txt',
            orderFile: 'filename4.txt'
        }];

        var numberOfFiles = 0;
        if (files.length!==0) numberOfFiles=files.length;
        var filesPerPage = 10;
        var numberOfPages = Math.ceil(numberOfFiles / filesPerPage);

        var pages = [[]];
        var j = 0;
        var filesLeft = numberOfFiles;
        for (var i=0; i<numberOfPages; i++) {
            pages[i]=[];
            filesLeft -= filesPerPage;
            var k = filesPerPage;
            if (filesLeft<0) k = numberOfFiles;
            while (j<k) {
                pages[i].push(
                    <tr key={j}>
                        <td>
                            {files[j].date}
                        </td>
                        <td>
                            {files[j].transferFile}
                        </td>
                        <td>
                            {files[j].orderFile}
                        </td>
                    </tr>
                );
                j++;
            }
        }

        this.state = {
            numberOfPages: numberOfPages,
            currentPage: 1,
            pages: pages,
            loading: true
        };
    }

    componentWillMount() {
        var that = this;
        setTimeout(function () {
            that.setState({
                loading: false
            })
        }, 1000)
    }

    changeCurrentPage = numPage => {
        this.setState({
            currentPage: numPage
        });
        //fetch data or update a query to get data
    };

    render() {
        if (this.state.loading) return (<WaveLoading />)
        else return (
            <div className="App">
                <div className="tab">
                <div className="filesList">
                    <h3 style={{textAlign: 'center'}}>Pliki</h3>
                    <div className='list'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='thShort'>Data</th>
                                    <th className='th' style={{width: "20em"}}>Pliki pierwsze</th>
                                    <th className='th' style={{width: "20em"}}>Pliki drugie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.pages}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id='pagesSelector'>
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.numberOfPages}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="square-i"
                    />
                </div>
                </div>
            </div>
        );
    }
}

export default Files;
