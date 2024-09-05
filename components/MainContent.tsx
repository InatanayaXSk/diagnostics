import React, { useState } from 'react';
import CarModePopup from './CarModePopup';
import ByWirePopup from './ByWirePopup';
import NewPopup from './TV';
import CarDataLevel1 from './CarDataLevel1';
import CarDataLevel3 from './CarDataLevel3';
import VehicleStatusDisplay from './VehicleStatusDisplay'; // Import the VehicleStatusDisplay component
import CarStatusUI from './CarStatusUI'; // Assuming this is the correct component for Car Data Level 2
import CarDataDisplay from './CarDataDisplay'; // Import the CarDataDisplay component

const MainContent: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState<string>('Battery');
  const [activeMiniSidebar, setActiveMiniSidebar] = useState<string | null>(null);
  const [showCarModePopup, setShowCarModePopup] = useState<boolean>(false);
  const [showByWirePopup, setShowByWirePopup] = useState<boolean>(false);
  const [showNewPopup, setShowNewPopup] = useState<boolean>(false);
  const [showCarDataLevel1, setShowCarDataLevel1] = useState<boolean>(false);
  const [showCarDataLevel2, setShowCarDataLevel2] = useState<boolean>(false);
  const [showCarDataLevel3, setShowCarDataLevel3] = useState<boolean>(false);
  const [showCarDataLevel4, setShowCarDataLevel4] = useState<boolean>(false); // State for Car Data Level 4
  const [showCarDataDisplay, setShowCarDataDisplay] = useState<boolean>(false); // State for Car Data Display

  // Handle main sidebar clicks
  const handleSidebarClick = (category: string) => {
    setActiveSidebar(category);
    setActiveMiniSidebar(null);
    resetPopups();

    // Show CarDataDisplay only when the "Car Status" sidebar is clicked
    if (category === 'Car Status') {
      setShowCarDataDisplay(false); // Ensure it only shows when a relevant mini-sidebar button is clicked
    } else {
      setShowCarDataDisplay(false);
    }
  };

  // Handle mini-sidebar clicks
  const handleMiniSidebarClick = (buttonLabel: string) => {
    setActiveMiniSidebar(buttonLabel);
    resetPopups();

    // Show specific popups based on the button clicked
    setShowCarModePopup(buttonLabel === 'Car Mode');
    setShowByWirePopup(buttonLabel === 'Bywire System');
    setShowNewPopup(buttonLabel === 'TV');
    setShowCarDataLevel1(buttonLabel === 'Car Data Level1');
    setShowCarDataLevel2(buttonLabel === 'Car Data Level2');
    setShowCarDataLevel3(buttonLabel === 'Car Data Level3');
    setShowCarDataLevel4(buttonLabel === 'Car Data Level4');

    // Show CarDataDisplay if "Error Statuses" is clicked in the mini sidebar
    setShowCarDataDisplay(buttonLabel === 'Error Statuses');
  };

  // Helper function to reset all popups
  const resetPopups = () => {
    setShowCarModePopup(false);
    setShowByWirePopup(false);
    setShowNewPopup(false);
    setShowCarDataLevel1(false);
    setShowCarDataLevel2(false);
    setShowCarDataLevel3(false);
    setShowCarDataLevel4(false);
    setShowCarDataDisplay(false);
  };

  // Define buttons for each main sidebar category
  const miniSidebarButtons: { [key: string]: string[] } = {
    'Battery': ['Voltage and Current', 'Charge Level', 'Battery Health', 'Cell Voltages', 'Charging Status', 'Battery Status'],
    'OBC': ['AC Voltage and Current', 'AC Power', 'Charging Time', 'DC Voltage and Current', 'OBC Status', 'Temperature Data'],
    'AC': ['Temperature', 'Fan Speed', 'AC Status'],
    'Seating and Lights': ['External Lighting', 'Internal Lighting', 'Table Status'],
    'Car Status': ['Car Mode', 'Bywire System', 'TV', 'Car Data Level1', 'Car Data Level2', 'Car Data Level3', 'Car Data Level4', 'Error Statuses'],
    'Doors and Tyres': ['Tyres', 'Side Doors', 'Roof and Boot Doors'],
    'Vehicular Control': ['Low Level Controls', 'PID Master Values', 'PID Controls', 'Control Unit 1', 'Control Unit 2', 'Control Unit 3'],
  };

  // Render mini sidebar based on the active main sidebar
  const renderMiniSidebar = () => (
    <div className="mini-sidebar">
      {miniSidebarButtons[activeSidebar]?.map((buttonLabel) => (
        <button
          key={buttonLabel}
          className={`mini-sidebar-button ${activeMiniSidebar === buttonLabel ? 'active' : ''}`}
          onClick={() => handleMiniSidebarClick(buttonLabel)}
        >
          <div className="mini-sidebar-text">{buttonLabel}</div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="body">
      <div className="sidebar">
        {['Battery', 'OBC', 'AC', 'Seating and Lights', 'Car Status', 'Doors and Tyres', 'Vehicular Control'].map((category) => (
          <button
            key={category}
            className={`sidebar-button ${activeSidebar === category ? 'active' : ''}`}
            onClick={() => handleSidebarClick(category)}
          >
            <div className="sidebar-icon"><img src={`images/${category === 'Car Status' ? 'tesla' : category}.svg`} alt={category} /></div>
            <div className="sidebar-text">{category}</div>
          </button>
        ))}
      </div>
      {renderMiniSidebar()}
      {showCarModePopup && <CarModePopup onClose={() => setShowCarModePopup(false)} />}
      {showByWirePopup && <ByWirePopup onClose={() => setShowByWirePopup(false)} />}
      {showNewPopup && <NewPopup onClose={() => setShowNewPopup(false)} />}
      {showCarDataLevel1 && <CarDataLevel1 onClose={() => setShowCarDataLevel1(false)} />}
      {showCarDataLevel2 && <CarStatusUI onClose={() => setShowCarDataLevel2(false)} />} {/* Render CarStatusUI for Car Data Level 2 */}
      {showCarDataLevel3 && <CarDataLevel3 />} {/* Render the CarDataLevel3 when Car Data Level 3 is selected */}
      {showCarDataLevel4 && <VehicleStatusDisplay />} {/* Render VehicleStatusDisplay when Car Data Level 4 is selected */}
      {showCarDataDisplay && <CarDataDisplay />} {/* Show CarDataDisplay based on state */}
    </div>
  );
};

export default MainContent;
