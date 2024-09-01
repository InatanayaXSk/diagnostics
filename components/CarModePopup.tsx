import React from 'react';

interface CarModePopupProps {
  onClose: () => void;
}

const CarModePopup: React.FC<CarModePopupProps> = ({ onClose }) => {
  return (
    <div className="car-mode-popup">
      <button className="close-button" onClick={onClose}>←</button>

      {/* Text box with a description */}
      <div className="text-box">
       
        <p> CAR MODE:      
           AMBIENT MODE</p>
      </div>
      
      {/* Car image that is larger and completely aligned to the right */}
      <div className="car-image1">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarModePopup;
