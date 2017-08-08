import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{height: '400px', width: '400px', border: '3px solid black', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{marginBottom: '30px'}}>Document Share</h1>
        <h3>Log In</h3>
        <form style={{display: 'flex', flexDirection: 'column'}}  method="POST" action="/login">
          <input type="text" placeholder="Email" style={{marginBottom: '5px'}}/>
          <input type="password" placeholder="Password" style={{marginBottom: '5px'}}/>
          <input type="submit" value="Log In" />
        </form>
        <Link style={{marginTop: '100px'}} to="/register">Not register? Click here to register</Link>
        <Link to="/home">Go to Home</Link>
      </div>
    </div>
  );
};

export default Login;
