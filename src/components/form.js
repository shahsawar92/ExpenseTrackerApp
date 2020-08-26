import React, { useState } from 'react';


function Form(){
  const [discription, setdiscription]= useState();
  const [transaction,settransaction]= useState();
  return( <div className="container">
    <h3>Add New transaction</h3>
    <form>
      <div> <label htmlFor="Transaction">Transaction</label>
    <input 
      type="number" 
      name="first" 
      id="transaction" 
      placeholder="enter ammount"
      value={transaction}
      onChange={(e)=>{settransaction(e.target.value)}}
      ></input> 
    </div>
    <div>
      <label htmlFor="Discription">Discription</label>
    <input 
      type="text"
      name="second" 
      id="transaction" 
      placeholder="enter reason"
      value={discription}
      onChange={(e)=>{setdiscription(e.target.value)}}
      ></input>
    </div>
    <button className="btn">Add Transaction</button>
    </form>
  </div> );
}
 export default Form;