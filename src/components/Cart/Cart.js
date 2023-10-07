import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, clear, cartQuantity, total } = useContext(CartContext);

    if(cartQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>productos</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
            <h3>Total a pagar: ${total()}</h3>
            <div>
                <button className='btn btn-danger' onClick={clear}>Vaciar el carrito</button>
                <Link className='btn btn-dark'>Terminar compra</Link>
            </div>
        </div>
        
    );
  
}

export default Cart;
