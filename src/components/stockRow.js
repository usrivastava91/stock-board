//React imports
import React from 'react';

//Material UI components imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import TrendingUp from '@material-ui/icons/TrendingUp';

//MISC
import './component-styles.css'

const StockRow = ((props) => {
    // Getting the status to apply appropriate conditional styling
    let status = props.status;
    return ( <TableRow className = 'font-robot-mono' >
                <TableCell className = {
                    `${status === 'rise' ? 'green': ''}
                    ${status === 'fall' ? 'red': ''}
                    ${status === 'same' ? '': ''}`
                }> {props.stockName}
                    <div>
                        <TrendingDown className = {`${status === 'fall' ? 'visible': 'hidden'}`}/>
                        <TrendingFlat className = {`${status === 'same'? 'visible': 'hidden'}`}/>
                        <TrendingUp  className = {`${status === 'rise'? 'visible': 'hidden'}`}/>
                    </div>
                </TableCell> 
                <TableCell align = 'right'> {
                    props.stockPrice
                }</TableCell> 
                <TableCell align = 'right'> {
                    props.durationPassed
                } 
                </TableCell> 
            </TableRow>
    )
})

export default StockRow;