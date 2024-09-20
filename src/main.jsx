import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Pizzacontext from './components/context/Pizzacontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pizzacontext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Pizzacontext>
</React.StrictMode>,
)
