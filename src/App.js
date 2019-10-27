import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dalalbull from './pages/Dalalbull/Dalalbull.component';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route to="/Dalalbull" component={Dalalbull} />
    </Switch>
  </BrowserRouter>
);

export default App;
