import React from 'react';
import './App.css';
import Header from './comments/Header'
import Home from './comments/Home'
import Udstyr from './comments/Udstyr'
import Dyk from './comments/Dyk'
import Padi from './comments/Padi'
import Footer from './comments/Footer'
import Kontakt from './comments/Kontakt'
import Omos from './comments/Omos'
import Login from './comments/Login'



import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   
    <Header/>
    <Route exact path ='/' component={Home} />
    <Route path ='/Udstyr' component={Udstyr} />
    <Route path ='/Dyk' component={Dyk} />
    <Route path ='/Padi' component={Padi} />
    <Route path ='/Kontakt' component={Kontakt} />
    <Route path ='/Omos' component={Omos} />
    <Route path ='/Login' component={Login} />
    
    <Footer />

    

    </div>
    </BrowserRouter>
  );
}

export default App;
