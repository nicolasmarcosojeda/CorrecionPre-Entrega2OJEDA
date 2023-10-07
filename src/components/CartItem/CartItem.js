import React from "react";

const CartItem = ({item}) => {
    return (
        <div className="d-flex justify-content-around align-items-center">
            <img src={item.img} alt={item.name}/>
        </div>
    )
}

export default CartItem