import React from 'react';
import { Switch, Route } from 'react-router';

import { Home, User } from './pages';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/user/:username" component={ User } />
    </Switch>
  );
}

export default App;
