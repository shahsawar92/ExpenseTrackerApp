import React from 'react';
import { useContext } from 'react';
import {useContexts } from '../mycontext/usecontext';
function Bal(){
  const { transactions } = useContext(useContexts);

    const amounts = transactions.map(transaction => transaction.money);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return( <div  className="container1">
    <h2>Current Balance:<span>{total}</span></h2>
    
  </div> );
}
 export default Bal;