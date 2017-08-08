import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log("this is in login");
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onPassChange(e) {
    this.setState({password: e.target.value});
  }

  onLoginClick() {
    if (! this.state.email) {
      alert("Email field is empty.");
      return;
    } else if (! this.state.password) {
      alert("Password field is empty");
      return;
    }
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password,
    })
    .then(response => {
      if (! response.login) {
        alert(response.error);
      } else {
        this.props.saveUserId(response.user_id);
        this.props.savePassword(this.state.password);
        
      }
    })
    .catch(err => {
      console.log("Error in onLoginClick login page");
    });
    this.setState({email: '', password: ''});
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{height: '400px', width: '400px', border: '3px solid black', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style={{marginBottom: '30px'}}>Document Share</h1>
          <h3>Log In</h3>
          <form style={{display: 'flex', flexDirection: 'column'}}>
            <input type="text" placeholder="Email" style={{marginBottom: '5px'}} value={this.state.email} onChange={(e) => this.onEmailChange(e)}/>
            <input type="password" placeholder="Password" style={{marginBottom: '5px'}} value={this.state.password} onChange={(e) => this.onPassChange(e)}/>
            <input type="submit" value="Log In" onClick={() => this.onLoginClick()}/>
          </form>
          <Link style={{marginTop: '100px'}} to="/register">Not register? Click here to register</Link>
        </div>
      </div>
    );
  }
}

export default Login;
