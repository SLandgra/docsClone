import React from 'react';

const GrayBox = () => {
  return (
    <div style={{backgroundColor: '#3f3f3f', display: 'flex', flexDirection: 'column', width: '100%', height: '350px'}}>
      <div style={{padding: '10px 0px 0px 250px', marginTop: '75px', display: 'flex', flexDirection: 'column'}}>
        <h4 style={{color: 'white', marginBottom: '20px'}}>Start a new document</h4>
        <div style={{height: '150px', width: '120px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => alert('hi')}>
          <div style={{color: 'lightblue', fontSize: '50px'}}>+</div>
        </div>
        <h5 style={{color: 'white'}}>Blank</h5>
      </div>
    </div>
  );
};

export default GrayBox;
