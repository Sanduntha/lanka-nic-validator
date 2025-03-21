import React, { useState } from 'react';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import './Card.css';
import InputCard from '../InputCard/InputCard';
import NIC from 'sl-nic-utils';

export default function Card() {
  
  const [nicNumber, setNicNumber] = useState(""); 
  const [nicInfo, setNicInfo] = useState({
    birthday: "",
    gender: "",
  });

  const handleNicChange = (e) => {
    setNicNumber(e.target.value);
  };

  const handleButtonClick = () => {
    try {
      const nic = new NIC(nicNumber);
      console.log("NIC Info:", nic);
      
      if (!nic.isValid) {
        alert("Please enter a valid NIC number.");
        return;
      }
      
      setNicInfo({
        birthday: nic.birthday.toString(),
        gender: nic.gender,
      });
    } catch (error) {
      console.error("Invalid NIC number or format.", error);
      alert("Please enter a valid NIC number.");
    }
  };

  const handleClose = () => {
    window.location.href = "http://localhost:5173/";
  };

  return (
    <div className='card'>
      <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleClose} />

      <img src="src/assets/new.jpg" alt="NIC" />

      <TextField 
        value={nicNumber}
        onChange={handleNicChange} 
        placeholder="Enter NIC number" 
      />

      <Button onClick={handleButtonClick}>Get NIC Info</Button>

      <InputCard name="NIC Num:" val={`${nicNumber}`}/>
      <InputCard name="Birthday:" val={`${nicInfo.birthday}`} />
      <InputCard name="Gender :" val={` ${nicInfo.gender}`} />
    </div>
  );
}