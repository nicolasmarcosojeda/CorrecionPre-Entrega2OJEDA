import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
   return (
    <nav>
        <h3>Mr.Soccer</h3>
        <div>
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/products/category/Superfly"></Link>
            <Link to="/products/category/Copa"></Link>
            <Link to="/informacion" className="nav-link">Información</Link>
        </div>
        <CartWidget />
    </nav>
   ) 
}

export default NavBar;
