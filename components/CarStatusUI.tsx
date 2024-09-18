import React, { useState, useEffect } from 'react';

const CarStatusUI: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(23); // Initial temperature in °C
  const [humidity, setHumidity] = useState<number>(22); // Initial humidity in %

  useEffect(() => {
    // Function to simulate temperature and humidity changes
    const updateConditions = () => {
      // Simulate temperature variation between 20°C and 30°C
      const newTemp = Math.floor(Math.random() * 10) + 20; 

      // Simulate humidity variation between 20% and 60%
      const newHumidity = Math.floor(Math.random() * 40) + 20; 

      setTemperature(newTemp);
      setHumidity(newHumidity);
    };

    // Update conditions every 5 seconds
    const intervalId = setInterval(updateConditions, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="status-popup">
      <div className="info-box">
        <h3>Car Data Level 2</h3>
        <p>Internal Temp: {temperature}°C</p>
        <p>Internal Humidity: {humidity}%</p>
      </div>
      <div className="vehicle-image">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarStatusUI;
