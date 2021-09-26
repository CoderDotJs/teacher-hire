import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import AddedToCart from '../AddedToCart/AddedToCart';


const Cart = (props) => {
    const { cart } = props;

    let total = 0;

    for(let price of cart){
        total += price.cost;
    }

    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartArrowDown} className="faCartArrowDown"/>
            <h5>Hire Summery:-</h5>
            <h3>Cart Amount: <span className="price">{props.cart.length}</span></h3>
            <h3>Cost: <span className="price">${total}</span></h3>
            <div style={{"margin": "70px 0 0 0"}}>
                {
                     props.cart.map(eachBlog =><AddedToCart
                        key={eachBlog.id + Math.random()}
                        clickedData={eachBlog}
                        ></AddedToCart>)
                }
                <button>Hire Then!!!</button>
            </div>
        </div>
    );
};

export default Cart;