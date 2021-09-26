import React from 'react';

const Cart = (props) => {
    const { name } = props.cart

    return (
        <div>
            <li>{name} <i style={{ color: 'green' }} class="fas fa-check-circle"></i></li>
        </div>
    );
};

export default Cart;