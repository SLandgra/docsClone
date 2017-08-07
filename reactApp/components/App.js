import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Document from './Document';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Document />
      </BrowserRouter>
    );
  }
}

export default App;
