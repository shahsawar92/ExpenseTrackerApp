import React from 'react';
import { useContext } from 'react';
import { useContexts } from '../mycontext/usecontext';

function Sum(){
  const {transactions} = useContext(useContexts)
  const amount= transactions.map(transactions=>transactions.money)

  const income= amount.filter(item=>item>0)
  .reduce((acc,item)=>(acc +=item),0)
  .toFixed(2);
  const expense = (
    amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  
  return( <div className="sum">
    <div><h4 className="colr">income</h4>
    <p className="money plus">{income}</p>
    </div> 
    <div><h4 className="colr">expence</h4>
  <p className="money minus">{expense}</p>
    </div>
  </div> );
}
 export default Sum;