import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Provider } from 'react-redux';
// import store from './store/store.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css'
import './assets/js/main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
