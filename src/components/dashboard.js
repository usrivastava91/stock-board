import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StockRow from './stockRow';
import Card from '@material-ui/core/Card';
import './dashboard.css';

const mapStateToProps = state => {
    return { stocks: state.stocks }
};


class ConnectedDashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        var stocks = this.props.stocks;
        var stocksObj = {};
        stocks.forEach(arr => {
            stocksObj[arr[0]] = arr[1];
        });
        // console.log('PROPS IN DASHBOARD object = =====', stocksObj);

        return (
            <div className='containerDiv' >
                <Card className='card' >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className='header'>Stocks</TableCell>
                                <TableCell className='header' align='right'>Prices</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(stocksObj).map((stockName, index) => {
                                let stockPrice = stocksObj[stockName];
                                return (
                                    <StockRow key={index} stockName={stockName}
                                        stockPrice={stockPrice}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </Card>

            </div>
        );
    }
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;