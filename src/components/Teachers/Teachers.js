import React, { useEffect, useState } from 'react';
import AddedToCart from '../AddedToCart/AddedToCart';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Teachers.css';

const Teachers = () => {

    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    
    useEffect( () => {
        fetch('./teachersData.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    const handleAddToCart = (user) =>{
        const newCart = [...cart, user];
        setCart(newCart);
        return user;
    }


    return (
        <div className="teachers">
            <h1>Our Best Teacher's In The World</h1>
            <br />
            <div className="container">
                <div className="teachers-card">
                    {
                        cards.map( (card) => {
                            const {key} = card;

                            return (
                                <Card 
                                data={card} 
                                key={key}
                                handleAddToCart={handleAddToCart}
                                ></Card> 
                            )
                        })
                    }
                </div>
                <div className="cart-div">
                    <Cart cart={cart}></Cart>
                    {/* <AddedToCart user={handleAddToCart}></AddedToCart> */}
                </div>
            </div>
        </div>
    );
};

export default Teachers;