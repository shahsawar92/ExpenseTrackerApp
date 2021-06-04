export default (state, action) => {
    switch(action.type){
        case 'delete':
            return{...state, transactions:state.transactions.filter(transactions=> transactions.id !== action.payload)}
        case 'addtran':
            return {
                ...state, transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}	