import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const disableScroll = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  };

  const enableScroll = () => {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = 'yes';
  };

  useEffect(() => {
    if (isConfettiActive) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isConfettiActive]);

  const handleButtonClick = () => {
    setIsConfettiActive(true);
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsConfettiActive(false);
      setIsMessageVisible(false);
    }, 15000); // Confetti duration: 15 seconds
  };

  return (
    <div className="App">
      {isConfettiActive && <Confetti initialVelocityY={{ min: 15, max: 30 }} />}
      {isMessageVisible && <div className="congratulations">Good Luck!</div>}
      <button onClick={handleButtonClick} className="center-button">Click Me</button>
    </div>
  );
}

export default App;
