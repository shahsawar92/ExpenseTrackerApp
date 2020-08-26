import React,{useContext} from 'react';
import {useContexts} from '../mycontext/usecontext';
import Each from './eachtrans';

function Trans(){
  const {transactions}= useContext(useContexts)
  console.log(transactions);
  return( <div className="history history-underline">
  <h3>Transaction history</h3>
  <ul className="history-list history-underline">
    {transactions.map(transactions =>(
    <Each key={
      transactions.id
    } transactions={transactions} /> 
    )
    ) 
    }
  </ul>
</div> );
}
 export default Trans;  