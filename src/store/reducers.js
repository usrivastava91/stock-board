const initState = {
    stocks: {}
}

 const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case ('GET_STOCKS'):
            let stockObj = {};
            //Getting the time from App component as payload to maintain the purity of the Reducer ( Redux Principles )
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
                stockObj[stockName] = {value: element[1], time: currentTime, status: status, lastUpdated: lastUpdated }
            });


        
            return { ...state, stocks: {...state.stocks, ...stockObj} }

    }
     
    
    return state;
}

export default rootReducer;