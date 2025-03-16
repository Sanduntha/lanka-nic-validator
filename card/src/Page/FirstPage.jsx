import React from 'react'; 
import './FirstPage.css';

export default function FirstPage({ onImageClick }) {
  return (
    <div>
      <p>Check NIC Details</p>

      <div className="image1" onClick={onImageClick}>
        <img
          className="image"
          src="src/assets/nic.png"
          alt="NIC"
        />
        <div className="word">Click</div>
      </div>
    </div>
  );
}
