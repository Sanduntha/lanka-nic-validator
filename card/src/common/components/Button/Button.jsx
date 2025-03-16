import React from 'react';

export default function Button({ onClick }) {
  return (
    <div>
      <button 
        onClick={onClick}
        style={{
          backgroundColor: "green",
          color: "white",
          width: 340,
          height: 38,
          borderRadius: 4,
          border: "green",
          marginTop: 15,
          cursor: "pointer"
        }} 
      >
        Submit
      </button>
    </div>
  );
}
