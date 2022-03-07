import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';


// METODO DO REACT QUE PEGA A DIV DE ID 'root' EM 'index.html'
// E REDENRIZAR DENTRO DELE, O COMPONENT <App />
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ARQUIVO PRINCIPAL DO REACT

