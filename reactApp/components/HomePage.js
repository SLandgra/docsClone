import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      {/* <div style={{display: 'flex', position: 'fixed', backgroundColor: '#6699ff', width: '100%'}}>
        <h3 style={{fontFamily: 'Lucida Console', color: 'white', padding: '20px 20px 20px 100px'}}>Document Portal</h3>

      </div> */}
      <Navbar style={{backgroundColor: '#6699ff'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HomePage;
