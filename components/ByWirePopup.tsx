import React from 'react';

interface ByWirePopupProps {
  onClose: () => void; // Prop to close the popup
}

const ByWirePopup: React.FC<ByWirePopupProps> = ({ onClose }) => {
  return (
    <div className="bywire-popup-overlay">
      <div className="bywire-popup-container">
        <div className="bywire-popup-header">
          <h2>By Wire System</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="bywire-popup-content">
          <div className="bywire-system-section">
            <h3>Steering</h3>
            <div className="status-row">
              <div className="status-label">Status:</div>
              <div className="status-value">Open</div>
            </div>
          </div>
          <div className="bywire-system-section">
            <h3>Acceleration/Brake Pedal</h3>
            <div className="status-row">
              <div className="status-label">Acc Pedal Status:</div>
              <div className="status-value">Open</div>
            </div>
            <div className="status-row">
              <div className="status-label">Brake Pedal Status:</div>
              <div className="status-value">Open</div>
            </div>
          </div>
          {/* Car image aligned to the right */}
          <div className="car-image">
            <img src="/images/car-model.svg" alt="Car Model" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByWirePopup;

