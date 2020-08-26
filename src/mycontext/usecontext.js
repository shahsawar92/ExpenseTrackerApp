import React, {createContext , useReducer} from "react";
import AppReducer from './AppReducer';


const initial={
    transactions: [
        {id:"1", discription:"expence", ammount:"-299"},
        {id:"2", discription:"income", ammount:"8299"},
        {id:"3", discription:"expence", ammount:"-299"},
        {id:"4", discription:"income", ammount:"1299"},
        {id:"5", discription:"expence", ammount:"-299"},
    ]
} 

//global context
export const useContexts=createContext(initial);
//create global context provider

export const Globalprovider=({children})=>{
    const [state, dispach] = useReducer(AppReducer, initial)
    return (
        <useContexts.Provider value={
            {
               transactions: state.transactions
            }

        }>
            {children}
        </useContexts.Provider>
    )
}