import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, img } = props.cart

    return (
        <div className="single-person-cart">
            <div className="person-img">
                <img src={img} alt="person" />
            </div>
            <p style={{ margin: "0px" }}>◉<b>{name}</b><i style={{ color: 'green' }} className="fas fa-check-circle"></i></p>
        </div>
    );
};

export default Cart;