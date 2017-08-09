import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BlueBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seach: ''
    };
  }

  onSearchChange(e) {
    this.setState({search: e.target.value});
  }

  // onLogOutClick() {
  //   localStorage.removeItem('user_id');
  //   localStorage.removeItem('password');
  //   <Redirect to="/login" />;
  // }

  render() {
    return (
      <div style={{display: 'flex', position: 'fixed', backgroundColor: '#4285f4', width: '100%', justifyContent: 'space-around'}}>
        <h3 style={{fontFamily: 'Arial', color: 'white', padding: '10px 10px 10px 100px'}}>DOCUMENT PORTAL</h3>
        <input style={{border: '0px', padding: '10px', margin: '10px 0px 10px 15px', borderRadius: '5px', width: '600px', backgroundColor: '#80aaff', color: 'aliceblue'}} value={this.state.search} placeholder="Search" />
        <Button style={{border: '0px', padding: '10px', margin: '10px 0px 10px 15px', borderRadius: '5px'}}>Log Out</Button>
      </div>
    );
  }
}

export default BlueBar;
