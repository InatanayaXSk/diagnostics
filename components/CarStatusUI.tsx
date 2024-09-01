import React from 'react';


const CarStatusUI: React.FC = () => {
  return (
    <div className="status-popup">
      <div className="info-box">
        <h3>Car Data Level 2</h3>
        <p>Internal Temp:  23°C</p>
        <p>Internal Humidity:  22%</p>
      </div>
      <div className="vehicle-image">
      <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarStatusUI;
