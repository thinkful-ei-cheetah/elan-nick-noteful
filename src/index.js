import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './STORE';

ReactDOM.render(
  
  <BrowserRouter >
    <App store={store} />
  </BrowserRouter>, 
  
  document.getElementById('root'));
