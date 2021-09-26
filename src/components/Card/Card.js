import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import AddedToCart from '../AddedToCart/AddedToCart';

const Card = (props) => {
    const { name, image, address, country, cost} = props.data;
    return (
        <div className="card">
            <h1>{name}</h1>
            <span>{country}</span>
            <img src={image} alt="" />
            <h4>{address}</h4>
            <h2>Per Year: $ {cost}</h2>
            <button onClick={()=>props.handleAddToCart(props.data)}>
                <FontAwesomeIcon icon={faHandshake}/> 
                <span className="span">Hire Him!</span>
                </button>
        </div>
    );
};

export default Card;