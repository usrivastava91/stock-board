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

//Mapping the state to a prop, making it accessible to the component.
const mapStateToProps = state => {
    return { stocks: state.stocks }
};

class ConnectedDashboard extends React.Component {

    // Establishing connection with the websocket.
    componentDidMount = () => {
        this.connection = new WebSocket('ws://stocks.mnet.website');
        this.connection.onmessage = this.getAllStock;
    }

    // Dispatching the action( getSockets) with the data recieved from the websocket, to update the state.
    getAllStock = (stocks) => {
        let stocksArr = JSON.parse(stocks.data);
        let currentTime = new Date().getTime();
        this.props.getStocks(stocksArr, currentTime );
    }

    //Passing the updated Stocks data from the state to the component.
    render() {
        let stocks = this.props.stocks;  
        return (
            <div className='container-div' >
                <Card className='card' >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className='header'>Stocks</TableCell>
                                <TableCell className='header' align='right'>Prices</TableCell>
                                <TableCell className='header' align='right'>Updated</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Segregating the properties from the stock to render them. */}
                            {Object.keys(stocks).map((stockName, index) => {
                                let stockPrice = (stocks[stockName].value).toFixed(2);
                                let lastUpdated = stocks[stockName].lastUpdated/1000; //(converting milliseconds to seconds)
                                let status = stocks[stockName].status;
                                let durationPassed = lastUpdated < 60 ? Math.round(lastUpdated) + ' seconds ago': 'A few minutes ago'
                                return (
                                    <StockRow key={index} stockName={stockName}
                                        stockPrice={stockPrice}
                                        durationPassed={durationPassed}
                                        status={status}
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