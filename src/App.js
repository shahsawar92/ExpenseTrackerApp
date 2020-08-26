import React from 'react';
import './App.css';
import Head from './components/header';
import Bal from './components/balance';
import Trans from './components/transaction';
import Form from './components/form';
import Sum from './components/summery';
import { Globalprovider } from './mycontext/usecontext';



function App(){
  return( 
    <Globalprovider>
  <div>
    <Head></Head>
    <div className="container"> <Bal />
    </div>
    <Sum />
    <Trans />
    <Form></Form>
  </div> 
    </Globalprovider>
  );
}
 export default App;