import React from 'react';


const VehicleStatusDisplay: React.FC = () => {
  return (
    <div className="vehicle-status-container">
      <div className="status-info-panel">
        <h3>Car Data Level 4</h3>
        <p className="status-drive-mode">DRIVE MODE: <strong>PARKED</strong></p>
        <p className="status-global-clock">Global Clock: <strong>30-07-2024, Tue. 08:32</strong></p>
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
