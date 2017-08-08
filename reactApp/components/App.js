import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      password: '',
      docs: [],
    };
  }

  saveUserId(input) {
    this.setState({user_id: input});
  }

  savePassword(input) {
    this.setState({password: input});
  }

  saveDocArray(input) {
    this.setState({docs: input});
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact={true} path="/home" render={() => (<HomePage user_id={this.state.user_id} password={this.state.password} docs={this.state.docs}/>)}/>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" render={() => <Login saveUserId={this.saveUserId.bind(this)} savePassword={this.savePassword.bind(this)} saveDocArray={this.saveDocArray.bind(this)}/>}/>
            <Route path="/">
              {! this.state.user_id ? <Redirect to="/login" /> : <Redirect to="/home" />}
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
