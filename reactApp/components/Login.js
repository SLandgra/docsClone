import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    var self = this;
  }

  onEmailChange(e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  onPassChange(e) {
    e.preventDefault();
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
    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password,
    })
    .then(response => {
      if (! response.data.login) {
        alert(response.data.error);
      } else {
        this.props.saveUserId(response.data.user_id);
        this.props.savePassword(this.state.password);
        this.props.saveDocArray(response.data.docs);
        this.setState({ redirect: true });
      }
    })
    .catch(err => {
      console.log("Error in onLoginClick login page", err);
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{height: '400px', width: '400px', border: '3px solid black', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{marginBottom: '30px'}}>Document Share</h1>
            <h3>Log In</h3>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <input type="text" placeholder="Email" style={{marginBottom: '5px'}} value={this.state.email} onChange={(e) => this.onEmailChange(e)}/>
              <input type="password" placeholder="Password" style={{marginBottom: '5px'}} value={this.state.password} onChange={(e) => this.onPassChange(e)}/>
              <input type="submit" value="Log In" onClick={this.onLoginClick.bind(this)}/>
            </form>
            <Link style={{marginTop: '100px'}} to="/register">Not register? Click here to register</Link>
          </div>
        </div>
      );
    }
  }
}

export default Login;
