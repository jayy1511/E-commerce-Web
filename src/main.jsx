import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CartProvider } from './context/CartContext'

// Initialize AOS
AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
