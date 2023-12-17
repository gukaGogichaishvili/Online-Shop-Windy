import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './shared/Header.jsx'
import Footer from './shared/Footer.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx'
import { SearchProvider } from './context/SearchContext'
import { FetchProvider } from './context/FetchContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import Sidebar from './components/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <FetchProvider>
    <ShoppingCartProvider>
    <SearchProvider>
      <FilterProvider>
    <Sidebar />
    <Header />
    <App />
    <Footer />
    </FilterProvider>
    </SearchProvider>
    </ShoppingCartProvider>
    </FetchProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
