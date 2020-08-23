import React from 'react';
import './App.css';
import Head from './components/header';
import Bal from './components/balance';
import Form from './components/form';
import Sum from './components/summery';
import Trans from './components/transaction';


function App(){
  return( <div>
    <Head></Head>
    <div className="container"> <Bal />
    </div>
    <Sum />
    <Trans></Trans>
    <Form></Form>
  </div> );
}
 export default App;