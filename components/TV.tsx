import React from 'react';


const TV: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="new-popup-container">
      <button className="new-back-button" onClick={onClose}>{'<'}</button>
      <div className="new-popup-content">
        <div className="new-popup-section">
          <div className="status-row">
            <span className="status-label">TV State Level</span>
            <span className="status-value">Open Mode</span>
          </div>
          <div className="status-row">
            <span className="status-label">Status</span>
            <span className="status-value">100%</span>
          </div>
        </div>

        <div className="new-popup-section">
          <div className="status-row">
            <span className="status-label">TV Status</span>
            <span className="status-value">State 1</span>
          </div>
          <div className="status-row">
            <span className="status-label">Status</span>
            <span className="status-value">Moving Up/Moving Down</span>
          </div>
        </div>

        <div className="car-image">
        <img src="/images/car-model.svg" alt="Car Model" />
        </div>
      </div>
    </div>
  );
};

export default TV;
