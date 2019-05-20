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
    return ( <tr className = 'font-p2play' >
                <td className = {
                    `${status === 'rise' ? 'green': ''}
                    ${status === 'fall' ? 'red': ''}
                    ${status === 'same' ? '': ''}`
                }> {props.stockName}
                    <div>
                        <TrendingDown className = {`${status === 'fall' ? 'visible': 'hidden'}`}/>
                        <TrendingFlat className = {`${status === 'same'? 'visible': 'hidden'}`}/>
                        <TrendingUp  className = {`${status === 'rise'? 'visible': 'hidden'}`}/>
                    </div>
                </td> 
                <td align = 'right'> {
                    props.stockPrice
                }</td> 
                <td align = 'right'> {
                    props.durationPassed
                } 
                </td> 
            </tr>
    )
})

export default StockRow;