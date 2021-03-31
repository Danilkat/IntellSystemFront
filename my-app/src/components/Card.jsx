import React from 'react';
import './scss/Card.scss';


const Card = (props) => {
  return (
    <div className="card"> {props.name} </div>
  );
}


export default Card;