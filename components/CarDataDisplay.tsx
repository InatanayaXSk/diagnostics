import React from 'react';

const CarDataDisplay: React.FC = () => {
  return (
    <div className="dashboardContainer">
      <div className="statusContainer">
        <div className="infoPanel">
          <button className="backButton">&larr;</button>
          <div className="statusCard">
            <h3>Vehicle Error Status</h3>
            <div className="statusDetails">
              <span className="label">Currently:</span>
              <span className="value">Working Fine</span>
            </div>
            <div className="statusDetails">
              <span className="label">Last Error Code:</span>
              <span className="value">232</span>
            </div>
            <div className="statusDetails">
              <span className="label">On:</span>
              <span className="value">23/7 15:30</span>
            </div>
            <button className="historyButton">Check History</button>
          </div>
        </div>

        <div className="infoPanel">
          <div className="statusCard">
            <h3>Kelly L Error Status</h3>
            <div className="statusDetails">
              <span className="label">Currently:</span>
              <span className="value">Working Fine</span>
            </div>
            <div className="statusDetails">
              <span className="label">Last Error Code:</span>
              <span className="value">232</span>
            </div>
            <div className="statusDetails">
              <span className="label">On:</span>
              <span className="value">23/7 15:30</span>
            </div>
            <button className="historyButton">Check History</button>
          </div>
        </div>

        <div className="infoPanel">
          <div className="statusCard">
            <h3>Kelly R Error Status</h3>
            <div className="statusDetails">
              <span className="label">Currently:</span>
              <span className="value">Working Fine</span>
            </div>
            <div className="statusDetails">
              <span className="label">Last Error Code:</span>
              <span className="value">232</span>
            </div>
            <div className="statusDetails">
              <span className="label">On:</span>
              <span className="value">23/7 15:30</span>
            </div>
            <button className="historyButton">Check History</button>
          </div>
        </div>  
      </div>

      <div className="vehicleDisplay">
        <img src="/images/car-model.svg" alt="Car Model" />
      </div>
    </div>
  );
};

export default CarDataDisplay;
