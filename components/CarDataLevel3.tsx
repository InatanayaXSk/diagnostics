import React, { useState, useEffect } from 'react';

const CarDataLevel3: React.FC = () => {
  // State to store the statuses
  const [statuses, setStatuses] = useState({
    can1: 'ACTIVE',
    can2: 'ACTIVE',
    can3: 'ACTIVE',
    internet: 'ACTIVE',
    ethernet: 'ACTIVE',
  });

  useEffect(() => {
    // Function to randomly update the status
    const updateStatuses = () => {
      setStatuses({
        can1: Math.random() > 0.5 ? 'ACTIVE' : 'INACTIVE',
        can2: Math.random() > 0.5 ? 'ACTIVE' : 'INACTIVE',
        can3: Math.random() > 0.5 ? 'ACTIVE' : 'INACTIVE',
        internet: Math.random() > 0.5 ? 'ACTIVE' : 'INACTIVE',
        ethernet: Math.random() > 0.5 ? 'ACTIVE' : 'INACTIVE',
      });
    };

    // Set an interval to update statuses every 3 seconds
    const intervalId = setInterval(updateStatuses, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="car-level3-overlay">
      <div className="car-level3-info-container">
        <button className="car-level3-close-button">X</button>
        <div className="car-level3-info-content">
          <div className="car-level3-status-popup">
            <h3 className="car-level3-title">Car Data Level 3</h3>
            <div className="car-level3-status-row">
              <span className="car-level3-status-label">CAN 1</span>
              <span className="car-level3-status-value">STATUS {statuses.can1}</span>
            </div>
            <div className="car-level3-status-row">
              <span className="car-level3-status-label">CAN 2</span>
              <span className="car-level3-status-value">STATUS {statuses.can2}</span>
            </div>
            <div className="car-level3-status-row">
              <span className="car-level3-status-label">CAN 3</span>
              <span className="car-level3-status-value">STATUS {statuses.can3}</span>
            </div>
            <div className="car-level3-status-row">
              <span className="car-level3-status-label">Internet</span>
              <span className="car-level3-status-value">STATUS {statuses.internet}</span>
            </div>
            <div className="car-level3-status-row">
              <span className="car-level3-status-label">Ethernet</span>
              <span className="car-level3-status-value">STATUS {statuses.ethernet}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="car-level3-image-container">
        <img className="car-level3-image" src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarDataLevel3;
