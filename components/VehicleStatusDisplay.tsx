import React, { useState, useEffect } from 'react';

const VehicleStatusDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    // Function to format the current date and time
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'short',
      });
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentDateTime(`${formattedDate}, ${formattedTime}`);
    };

    // Initial date and time setting
    updateDateTime();

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="vehicle-status-container">
      <div className="status-info-panel">
        <h3>Car Data Level 4</h3>
        <p className="status-drive-mode">DRIVE MODE: <strong>PARKED</strong></p>
        <p className="status-global-clock">Global Clock: <strong>{currentDateTime}</strong></p>
        <p className="status-distance-empty">Distance to Empty: <strong>90km</strong></p>
        <p className="status-distance-travelled">Distance Travelled: <strong>290km</strong></p>
      </div>
      <div className="vehicle-image-display">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
      <button className="close-popup-btn">X</button>
    </div>
  );
};

export default VehicleStatusDisplay;
