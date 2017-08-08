import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // createDoc(input) {
  //   var docArray = this.state.docs.slice();
  //   docArray.unshift(input);
  //   this.setState({docs: docArray});
  // }

  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact={true} path="/home" render={() => (<HomePage />)}/>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" render={() => <Login />}/>
            <Route path="/">
              {! localStorage.getItem('user_id') ? <Redirect to="/login" /> : <Redirect to="/home" />}
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
