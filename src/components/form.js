import React, {useState, useContext} from 'react';
import { useContexts } from '../mycontext/usecontext';


function Form(){
  //create 2 states for containing value
  const [text, settext]= useState();
  const [money,setmoney]= useState(0);
  
  //using the created context wrapper
  const {addtransaction} = useContext(useContexts);
  //telling the form to control reload and refresh events
  const onSubmit = e => {
    e.preventDefault();
  
  // new transaction with transaction id, discription as text and amount as money
  const newTransaction = {
    id : Math.floor(Math.random() * 100000000),
    text,
    money: +money
  }
  //sending the transaction into the function addtransaction which is in usecontext.js
  addtransaction(newTransaction);
}
  //now the component is returning to the browser.
  return( <div className="container">
    <h3>Add New transaction</h3>
    
    {/* //form */}
    <form onSubmit={onSubmit}>
      <div> <label htmlFor="Transaction">Transaction</label>
        <input
          type="number" 
          placeholder="Enter ammount..."
          value={money}
          onChange={(event)=>{setmoney(event.target.value)}}
        ></input> 
      </div>
      
      <div><label htmlFor="Discription">Discription</label>
        <input 
        type="text"
        placeholder="Enter discription..."
        value={text}
        onChange={(event)=>{settext(event.target.value)}}
        ></input>
      </div>
    
      <button className="btn">Add Transaction</button>
    </form>


  </div> );
}
 export default Form;