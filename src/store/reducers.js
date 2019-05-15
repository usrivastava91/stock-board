const initState = {
    stocks: []
}

 const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case ('GET_STOCKS'):
            return { ...state, stocks: state.stocks.concat(action.payload) }
    }
    return state;
}

export default rootReducer;