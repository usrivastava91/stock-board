import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const StockRow = ((props) => {
    console.log('MILEEEE===============>', props)
    return (
        <div>
            <TableCell>{props.stockName}</TableCell>
            <TableCell>{props.stockPrice}</TableCell>
        </div>
    )
}
)

export default StockRow;