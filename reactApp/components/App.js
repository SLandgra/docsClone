import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import Document from './Document';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/register" component={Register}/>
            <Route exact={true} path="/home" component={HomePage}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
