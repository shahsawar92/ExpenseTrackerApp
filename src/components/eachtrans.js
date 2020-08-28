import React,{useContext} from 'react';
import {useContexts} from "../mycontext/usecontext"

function Each({transactions}){
  const {deletetransaction}=useContext(useContexts)

   const sign= transactions.money <0 ? '-' : "+"



  return( 
    <li className={transactions.money < 0 ? 'item-minus': 'item-plus'} >{transactions.text}
          <span> {sign}${ Math.abs(transactions.money ) } </span>
          <button onClick={() => deletetransaction(transactions.id )}> X</button>
    
    </li>
    );
}
export default Each;