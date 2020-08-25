import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {MainPage} from './MainPage/MainPage';
import {Registr} from './Registr/Registr';
import {Authorization} from './Authorization/Authorization'


function App() {
  return (
    <>
    <MainPage/>
    <Route path="/" exact />
    <Route path="/registr" component={Registr} />
    <Route path="/author" component={Authorization} />    
    </>
  );
}

export default App;
