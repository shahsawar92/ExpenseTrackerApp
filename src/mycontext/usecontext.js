import React, {createContext , useReducer} from "react";
import AppReducer from './AppReducer';

//initial state
const initial={
    transactions:[  ]
} 

//global context
export const useContexts=createContext(initial);


//create global context provider wrapper
export const Globalprovider=({children})=>{
    //app reducer
    const [state, dispach] = useReducer(AppReducer, initial)


//Actions:
//we recive input from the form here! and it will send it to reducer
    function addtransaction(money){
        dispach({
            type: 'addtran', payload:money
        })
    }

    //delete function
    function deletetransaction(id){
        dispach({
            type: 'delete', payload:id
        })
    }

//return the wrapper
    return (
        <useContexts.Provider value={
            {
               transactions: state.transactions, addtransaction, deletetransaction
            }

        }>
            {children}
        </useContexts.Provider>
    )
}