import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StockRow from './stockRow';

// const mapStateToProps = state => {
//     return { stocks: state.stocks }
// };


// const Dashboard = (props) => (
//     <div>
//         {/* <ul>
//        {stocks.map(stock => (
//             <li>
//                 {stock}
//             </li>
//         ))}
//     </ul> */}

{/* <Paper>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Stocks</TableCell>
                <TableCell>Prices</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.map(stock => (
                // stock.map(iter => (
                //     <TableRow>
                //         <TableCell>{iter}</TableCell>
                //     </TableRow>
                // ))

               <TableRow>
                   <TableCell>{stock}</TableCell>
               </TableRow>
            ))}

        </TableBody>
    </Table>
</Paper> */}



//     </div>

// )

// const Dashboard = connect(mapStateToProps)(connectedDashboard);

// export default Dashboard;

const mapStateToProps = state => {
    return { stocks: state.stocks }
};

class ConnectedDashboard extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        // console.log('PROPS IN DASHBOARD = =====', this.props.stocks);
    }

    render() {
        var stocks = this.props.stocks;
        var stocksObj = {};
        var stockNames = [];
        var stockPrices = [];
        // console.log('PROPS IN DASHBOARD = =====', stocks);
        stocks.forEach(arr => {
            stocksObj[arr[0]] = arr[1];
        });
        console.log('PROPS IN DASHBOARD object = =====', stocksObj);
        for (let key in stocksObj) {
            // console.log(`${key} ==> ${stocksObj[key]}`)
            stockNames.push(key);
            stockPrices.push(stocksObj[key])
            // console.log('name =====',stockNames);
            // console.log('prices =====',stockPrices);

        }
        return (
        


            
                 <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Stocks</TableCell>
                            <TableCell>Prices</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {Object.keys(stocksObj).map((stockName, index) => {
                                    let stockPrice = stocksObj[stockName];
                                    return (
                                        <StockRow key={index} stockName={stockName}
                                            stockPrice={stockPrice}
                                        />
                                    )
                                })}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            

        );
    }
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;