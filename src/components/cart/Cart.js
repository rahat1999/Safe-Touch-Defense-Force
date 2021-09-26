import React from 'react';

const Cart = (props) => {
    const { name } = props.cart

    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Cart;