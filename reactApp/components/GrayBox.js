import React from 'react';
import { Button } from 'react-bootstrap';

const GrayBox = () => {
  return (
    <div style={{backgroundColor: '#3f3f3f', display: 'flex', flexDirection: 'column', width: '100%', height: '350px'}}>
      <div style={{padding: '30px 0px 0px 18%', marginTop: '75px', display: 'flex', flexDirection: 'column'}}>
        <h4 style={{color: 'white', marginBottom: '20px'}}>Start a new document</h4>
        <form>
          <input style={{border: '0px', padding: '10px', borderRadius: '5px', width: '400px', backgroundColor: 'white', color: 'gray', marginRight: '20px'}} placeholder="Add document name" />
          <Button style={{padding: '10px', width: '80px'}}>Create</Button>
        </form>
        <h4 style={{color: 'white', margin: '30px 0px 20px 0px'}}>Add a shared document</h4>
        <form>
          <input style={{border: '0px', padding: '10px', borderRadius: '5px', width: '400px', backgroundColor: 'white', color: 'gray', marginRight: '20px'}} placeholder="Add document name" />
          <Button style={{padding: '10px', width: '80px'}}>Add</Button>
        </form>
      </div>
    </div>
  );
};

export default GrayBox;
