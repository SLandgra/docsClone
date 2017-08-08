import React from 'react';
import GrayBox from './GrayBox';
import BlueBar from './BlueBar';
import YourDocuments from './YourDocuments';
// import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <BlueBar />
      <GrayBox />
      <YourDocuments />
    </div>
  );
};

export default HomePage;
