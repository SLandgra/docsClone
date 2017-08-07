import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//import Document from './Document';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Login />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
