import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StockRow from './stockRow';
import Card from '@material-ui/core/Card';

const mapStateToProps = state => {
    return { stocks: state.stocks }
};

const table = {
    width: '600px',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '30px',
    border: '5px solid grey'
  };

const card = { 
    margin: '0 auto',
    width: '600px',
    marginTop: '30px',
    marginBottom: '30px',
    maxHeight: '80%'
}

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
        <div  style = { card }>
           <Card>
                 <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Stocks</TableCell>
                            <TableCell align='right'>Prices</TableCell>
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