import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title } = props;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;