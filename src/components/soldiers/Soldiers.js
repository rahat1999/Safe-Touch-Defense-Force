import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import SoldierDetails from '../solderdetails/SoldierDetails';
import './Soldiers.css'

const Soldiers = () => {

    const [soldiers, setSoldiers] = useState([])
    useEffect(() => {
        fetch("./fake.JSON")
            .then(res => res.json())
            .then(data => setSoldiers(data))
    }, [])

    //---Handale Button---//
    const [displayCart, setDisplayCart] = useState([])
    const handleButton = (event) => {
        const newCart = [...displayCart, event]
        setDisplayCart(newCart)
    }

    //-----add total slary-----//
    let total = 0;
    for (const solderSalary of displayCart) {
        total = total + solderSalary.salary;
    }

    // send data to child component frome here//
    return (
        <div className="container">
            <div className="main-container">
                {
                    soldiers.map(soldier => <SoldierDetails
                        handleButton={handleButton}
                        key={soldier.id}
                        soldier={soldier}
                    ></SoldierDetails>)
                }
            </div>
            {/* cart item */}
            <div className='cart'>
                <h4>Total count: {displayCart.length}</h4>
                <p><b>Tota Pay: {total} $<i class="fas fa-money-bill-alt"></i></b></p>

                {
                    displayCart.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Soldiers;