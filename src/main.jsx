import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Body from './body/body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <Body />

    <Footer />
  </React.StrictMode>,
)
