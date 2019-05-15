//React imports
import React from 'react';

//Material UI Component imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

//Redux imports
import { connect } from 'react-redux';
import { getStocks } from '../store/actions'

//MISC
import './component-styles.css';
import StockRow from './stockRow';


const mapStateToProps = state => {
    return { stocks: state.stocks }
};

class ConnectedDashboard extends React.Component {

    // Establishing connection with websocket.
    componentDidMount = () => {
        this.connection = new WebSocket('ws://stocks.mnet.website');
        this.connection.onmessage = this.getAllStock;
    }

    // Dispatching the action(getSockets) with the data recieved from the websocket, to update the state.
    getAllStock = (stocks) => {
        var stocksArr = JSON.parse(stocks.data);
        let currentTime = new Date().getTime();
        this.props.getStocks(stocksArr, currentTime );
    }

    //updating stockObj with the names and prices of the stocks from the updated state, and rendering them.
    render() {
        var stocks = this.props.stocks;
        return (
            <div className='container-div' >
                <Card className='card' >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className='header'>Stocks</TableCell>
                                <TableCell className='header' align='right'>Prices</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(stocks).map((stockName, index) => {
                                let stockPrice = stocks[stockName].value;
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

const Dashboard = connect(mapStateToProps, { getStocks })(ConnectedDashboard);

export default Dashboard;