import React, {Component} from 'react';
import '../../css/App.css';
import Doc from "./Doc";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

class DocumentsTable extends Component {
    state = {
        currentIndex: 0,
        numberOfPages: 0,
        currentPage: 1,
        pages: []
    };

    changeCurrentPage = numPage => {
        this.setState({
            currentPage: numPage
        });
        //fetch data or update a query to get data
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        var documents = this.props.documents;

        var numberOfDocuments = 0;
        if (documents.length!==0) numberOfDocuments=documents.length;
        var documentsPerPage = 3;
        var numberOfPages = Math.round(numberOfDocuments / documentsPerPage);

        var pages = [[]];
        var j = 0;
        var documentsLeft = numberOfDocuments;
        for (var i=0; i<numberOfPages; i++) {
            pages[i]=[];
            documentsLeft -= documentsPerPage;
            var k = documentsPerPage;
            if (documentsLeft<0) k = numberOfDocuments;
            while (j<k) {
                pages[i].push(
                    <Doc key={j} docNr={documents[j].docNr} otherNr={documents[j].otherNr}
                         status={documents[j].status}
                         data1={documents[j].data1} data2={documents[j].data2}
                         data3={documents[j].data3} data4={documents[j].data4}
                         name={documents[j].name} zipCode={documents[j].zipCode}
                         city={documents[j].city} address={documents[j].address}
                         date={documents[j].date} comment={documents[j].comment}/>
                );
                j++;
            }
        }

        if (this.state.numberOfPages===0 && this.state.pages.length===0) this.setState({
            numberOfPages: numberOfPages,
            pages: pages
        })
    }

    render() {


        return (
            <div className='documentsTable'>
                <div id='pagesSelector'>
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.numberOfPages}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="square-i"
                    />
                </div>

                {this.state.pages[this.state.currentPage-1]}
            </div>
        );
    }
}

export default DocumentsTable;
