const initState = {
    stocks: {}
}

 const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case ('GET_STOCKS'):
            let obj = {};
            let currentTime = action.payload.time;
            action.payload.stocks.forEach(element => {
                let stockName = element[0];
                let stockVal = element[1];
                let oldStock = state.stocks[stockName];
                let lastUpdated = 0;
                let status = 'same';
                if(oldStock) {
                    let difference = stockVal - oldStock.value;
                    lastUpdated = currentTime - oldStock.time ;
                    if(difference > 0){
                        status = 'rise'
                    } 
                    else if(difference < 0) {
                        status = 'fall'
                    }
                    else {
                        status = 'same'
                    }
                }
                obj[stockName] = {value: element[1], time: currentTime, status: status, lastUpdated: lastUpdated }
            });


        
            return { ...state, stocks: {...state.stocks, ...obj} }

    }
    return state;
}

export default rootReducer;