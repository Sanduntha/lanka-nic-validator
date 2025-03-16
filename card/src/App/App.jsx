import React, { useState } from 'react';
import FirstPage from '../Page/FirstPage';
import SecondPage from '../Page/SecondPage';
import './App.css';

function App() {
  // State to control the display of pages
  const [showFirstPage, setShowFirstPage] = useState(true);

  // Function to handle the image click and switch pages
  const handleImageClick = () => {
    setShowFirstPage(false); // Hide the FirstPage and show SecondPage
  };

  return (
    <div className="App">
      {/* Conditionally render FirstPage or SecondPage */}
      {showFirstPage ? (
        <FirstPage onImageClick={handleImageClick} />
      ) : (
        <SecondPage />
      )}
    </div>
  );
}

export default App;
