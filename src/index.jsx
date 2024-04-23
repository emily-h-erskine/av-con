import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Header } from './CommonComponents/Header/Header';
import Footer from './CommonComponents/Footer/Footer';
import './index.css';
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
