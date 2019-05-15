//React imports
import React from 'react';

//Material UI components imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

//MISC
import './component-styles.css'

const StockRow = ((props) => {
    return (
        <TableRow>
            <TableCell className='font-robot-mono'>{props.stockName}</TableCell>
            <TableCell align='right' className='font-robot-mono'>{props.stockPrice}</TableCell>
        </TableRow>
    )
}
)

export default StockRow;