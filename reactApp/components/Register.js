import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPass: '',
      redirect: false,
    };
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  onRepeatPassChange(e) {
    this.setState({repeatPass: e.target.value});
  }

  onRegisterClick() {
    if (! this.state.email || ! this.state.password || ! this.state.repeatPass) {
      alert('Empty field');
      return;
    }
    axios.post('http://localhost:3000/register', {
      email: this.state.email,
      password: this.state.password,
      repeatPass: this.state.repeatPass,
    })
    .then(response => {
      if (! response.data.success) {
        alert(response.data.error);
      } else {
        this.setState({redirect: true});
      }
    })
    .catch(err => {
      console.log("Error in register", err);
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login"/>;
    } else {
      return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{height: '400px', width: '400px', border: '3px solid black', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{marginBottom: '30px'}}>Document Share</h1>
            <h3>Register</h3>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <input type="text" placeholder="Email" style={{marginBottom: '5px'}} value={this.state.email} onChange={(e) => this.onEmailChange(e)}/>
              <input type="password" placeholder="Password" style={{marginBottom: '5px'}} value={this.state.password} onChange={(e) => this.onPasswordChange(e)}/>
              <input type="password" placeholder="Retype password" style={{marginBottom: '5px'}} value={this.state.repeatPass} onChange={(e) => this.onRepeatPassChange(e)}/>
              <input type="submit" value="Register" onClick={this.onRegisterClick.bind(this)}/>
            </form>
            <Link style={{marginTop: '70px'}} to="/login">Already have an account? Login here</Link>
          </div>
        </div>
      );
    }
  }
}

export default Register;
