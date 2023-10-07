import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; // Ajusta la ruta según la ubicación real
import Cart from './assets/Cart.png';
import '../../index.css';
import { Badge } from 'react-bootstrap'

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);
  
    return (
      <Link className="" to="/cart">
        <div to="/#" className="position-relative" style={{ color: "#201f1f" }}>
            <img src={Cart} alt="CartWidget" className="cart-image" />
            <i className="bi bi-bag fs-5"></i>
            <span className="position-absolute start-100 rounded-pill badge" style={{ backgroundColor: "#FEFAE0", color: "#201f1f", border: "1px solid", top: "-8px", display: cartQuantity() > 0 ? 'block' : 'none' }}>{cartQuantity}</span>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
      </Link>
    );
}

export default CartWidget;
