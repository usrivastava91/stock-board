export const getStocks = (stocks, time)=>{
    return { type: 'GET_STOCKS', payload: {stocks, time} }
};