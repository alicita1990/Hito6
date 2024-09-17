import React from 'react';
import { CartProvider } from './components/context/Cartcontext';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Footer from './components/Footer'
import Formulario from './pages/Formulario'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Notfound from './pages/Notfound';
import Profile from './pages/Profile';
import { Route, Routes } from "react-router-dom";
import { NavItem } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyCard from './components/MyCard';


function App() { 
    return (
        <>
    <CartProvider>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </CartProvider>
        
</>
    );
}

export default App;


