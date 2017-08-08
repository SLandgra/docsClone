import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{height: '400px', width: '400px', border: '3px solid black', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{marginBottom: '30px'}}>Document Share</h1>
        <h3>Register</h3>
        <form style={{display: 'flex', flexDirection: 'column'}}  method="POST" action="/register">
          <input type="text" placeholder="Email" style={{marginBottom: '5px'}}/>
          <input type="password" placeholder="Password" style={{marginBottom: '5px'}}/>
          <input type="password" placeholder="Retype password" style={{marginBottom: '5px'}}/>
          <input type="submit" value="Register" />
        </form>
        <Link style={{marginTop: '70px'}} to="/">Already have an account? Login here</Link>
      </div>
    </div>
  );
};

export default Register;
