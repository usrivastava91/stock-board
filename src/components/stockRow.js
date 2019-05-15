import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StockRow = ((props) => {
    return (
        <TableRow>
            <TableCell>{props.stockName}</TableCell>
            <TableCell align='right'>{props.stockPrice}</TableCell>
        </TableRow>
    )
}
)

export default StockRow;