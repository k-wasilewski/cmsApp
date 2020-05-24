import React, {Component} from 'react';
import '../../../css/App.css';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class ClientHistoryTable extends Component {
    constructor() {
        super();
        this.state = {
            data: [{
                date: '2018-02-10 12:20',
                operation: 'operacja pierwsza',
                canal: 'KANAŁ CZWARTY',
                operator: 'system',
                cost: '20.00',
                accNo: '23 3243 4323 4323 1298 9584 8374',
                rechargeDate: '2018-02-10 12:20'
            },{
                date: '2013-10-19 13:28',
                operation: 'operacja druga',
                canal: 'KANAŁ DRUGI',
                operator: 'jan kowalski',
                cost: '30.00',
                accNo: '23 8348 3843 2738 0003 9273 6438',
                rechargeDate: '2013-10-19 13:28'
            }]
        };
    }

    render() {
        const data = this.state.data;
        const columns = [{
            Header: 'Data',
            accessor: 'date'
        },{
            Header: 'Operacja',
            accessor: 'operation'
        },{
            Header: 'Kanał',
            accessor: 'canal'
        },{
            Header: 'Operator',
            accessor: 'operator'
        }]

        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    style={{
                        textAlign: "center"
                    }}
                    defaultPageSize={10}
                    pageSize={data.length}
                    showPagination={false}
                    getTrProps={(state, rowInfo) => {
                        if (rowInfo && rowInfo.row) {
                            return {
                                onClick: e => {
                                    if (rowInfo.index !== this.state.rowEdit) {
                                        this.setState({
                                            rowEdit: rowInfo.index,
                                            selectedRowIndex: rowInfo.original,
                                            selectionChanged: this.state.selectionChanged
                                                ? false
                                                : true
                                        }, function () {
                                            this.props.parentCallback(this.state.selectedRowIndex);
                                        });
                                    } else {
                                        this.setState({
                                            rowEdit: null
                                        }, function () {
                                            this.props.parentCallback(this.state.selectedRowIndex);
                                        });
                                    }
                                },
                                style: {
                                    background:
                                        rowInfo.index === this.state.rowEdit ? "purple" : "white",
                                    color:
                                        rowInfo.index === this.state.rowEdit ? "white" : "black"
                                }
                            };
                        } else {
                            return {};
                        }
                    }}
                />
                <br />
            </div>
        );
    }
}

export default ClientHistoryTable;
