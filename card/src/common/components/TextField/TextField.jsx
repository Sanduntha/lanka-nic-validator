import React from 'react';
import './TextField.css';

export default function TextField({ onChange }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Your NIC" 
        onChange={onChange} 
      />
    </div>
  );
}
