import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
   return (
    <nav>
        <h3>Mr.Soccer</h3>
        <div>
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/products/category/Nike"className="nav-link category-link" name="Nike">Nike</Link>
            <Link to="/products/category/Adidas" className="nav-link category-link" name="Adidas">Adidas</Link>
            <Link to="/products/category/Puma" className="nav-link category-link" name="Puma">Puma</Link>
            <Link to="/informacion" className="nav-link">Información</Link>
        </div>
        <NavLink style={{textDecoration:'none'}} to='/cart'> <CartWidget /></NavLink>
    </nav>
   ) 
}

export default NavBar;
