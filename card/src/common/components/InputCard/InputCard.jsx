import React from 'react';
import './InputCard.css';

export default function InputCard({ val, name }) {
  return (
    <div className='card2'>
      <h5>{name}</h5>
      <label htmlFor="content1">{val}</label>
    </div>
  );
}
