import React from 'react';


function Each({transactions}){
  return( 
    <li className="item-minus">{transactions.discription}<span>{transactions.ammount}</span><button>X</button></li>
    );
}
export default Each;
