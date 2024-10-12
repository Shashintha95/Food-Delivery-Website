//react router



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//browser roter
import {BrowserRoter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRoter>
    <App />
  </BrowserRoter>
)
