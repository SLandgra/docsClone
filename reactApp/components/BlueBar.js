import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BlueBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seach: '',
      redirect: false,
    };
  }

  onSearchChange(e) {
    this.setState({search: e.target.value});
  }

  onLogOutClick(e) {
    e.preventDefault();
    localStorage.removeItem('user_id');
    localStorage.removeItem('password');
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div style={{display: 'flex', position: 'fixed', backgroundColor: '#4285f4', width: '100%', justifyContent: 'space-around'}}>
          <h3 style={{fontFamily: 'Arial', color: 'white', padding: '10px 10px 10px 100px'}}>DOCUMENT PORTAL</h3>
          <input style={{border: '0px', padding: '10px', margin: '10px 0px 10px 15px', borderRadius: '5px', width: '600px', backgroundColor: '#80aaff', color: 'aliceblue'}} value={this.state.search} placeholder="Search" />
          <Button style={{border: '0px', padding: '10px', margin: '10px 0px 10px 15px', borderRadius: '5px'}} onClick={(e) => this.onLogOutClick(e)}>Log Out</Button>
        </div>
      );
    }
  }
}

export default BlueBar;
