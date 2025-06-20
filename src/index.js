import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ShopContextProvider from './ShopContext';

ReactDOM.render(
  <BrowserRouter basename="/Urban-Kicks-React-Website">
    <ShopContextProvider>
        <App />
      </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
