import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>
)
