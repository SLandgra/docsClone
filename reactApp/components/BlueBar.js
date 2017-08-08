import React from 'react';

const BlueBar = () => {
  return (
    <div style={{display: 'flex', position: 'fixed', backgroundColor: '#4285f4', width: '100%', justifyContent: 'space-around'}}>
      <h3 style={{fontFamily: 'Arial', color: 'white', padding: '10px 10px 10px 100px'}}>DOCUMENT PORTAL</h3>
      <input style={{border: '0px', padding: '10px', margin: '10px 0px 10px 15px', borderRadius: '5px', width: '600px', backgroundColor: '#80aaff', color: 'aliceblue'}} value="Search" />
    </div>
  );
};

export default BlueBar;
