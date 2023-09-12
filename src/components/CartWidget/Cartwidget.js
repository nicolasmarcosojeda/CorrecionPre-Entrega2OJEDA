import React from 'react';
import Cart from './assets/Cart.png'
import '../../index.css';

const CartWidget = () => {
    return (
        <div>
            <img src={Cart} alt="CartWidget" className="cart-image"/>
            0
        </div>
    )
}

export default CartWidget