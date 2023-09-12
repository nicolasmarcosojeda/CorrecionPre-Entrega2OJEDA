import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
   return (
    <nav>
        <h3>Mr.Soccer</h3>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Botines</Link>
            <button>Informacion</button>
            <button>Seguinos</button>
        </div>
        <CartWidget/>
    </nav>
   ) 
}

export default NavBar