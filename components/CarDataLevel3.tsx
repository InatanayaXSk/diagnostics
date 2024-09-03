import React from 'react';


const CarDataLevel3 = () => {
    return (
        <div className="car-level3-overlay">
            <div className="car-level3-info-container">
                <button className="car-level3-close-button">X</button>
                <div className="car-level3-info-content">
                    <div className="car-level3-status-popup">
                        <h3 className="car-level3-title">Car Data Level 3</h3>
                        <div className="car-level3-status-row">
                            <span className="car-level3-status-label">CAN 1</span>
                            <span className="car-level3-status-value">      STATUS   ACTIVE</span>
                        </div>
                        <div className="car-level3-status-row">
                            <span className="car-level3-status-label">CAN 2</span>
                            <span className="car-level3-status-value">       STATUS   ACTIVE</span>
                        </div>
                        <div className="car-level3-status-row">
                            <span className="car-level3-status-label">CAN 3</span>
                            <span className="car-level3-status-value">       STATUS   ACTIVE</span>
                        </div>
                        <div className="car-level3-status-row">
                            <span className="car-level3-status-label">Internet</span>
                            <span className="car-level3-status-value">       STATUS   ACTIVE</span>
                        </div>
                        <div className="car-level3-status-row">
                            <span className="car-level3-status-label">Ethernet</span>
                            <span className="car-level3-status-value">       STATUS   ACTIVE</span>
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
