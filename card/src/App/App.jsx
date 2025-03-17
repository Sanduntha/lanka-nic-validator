import React, { useState } from 'react';
import FirstPage from '../Page/FirstPage';
import SecondPage from '../Page/SecondPage';
import './App.css';

function App() {
  
  const [showFirstPage, setShowFirstPage] = useState(true);

  const handleImageClick = () => {
    setShowFirstPage(false);
  };

  return (
    <div className="App">
      {showFirstPage ? (
        <FirstPage onImageClick={handleImageClick} />
      ) : (
        <SecondPage />
      )}
    </div>
  );
}

export default App;
