import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Page from './components/JS/Page';
import Temp from './components/JS/Temp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Money from './components/JS/Money';
import Pesos from './components/JS/Pesos';
import Medidas from './components/JS/Medidas';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
        <Route path='/medida'>
          <Medidas/>
        </Route>
        <Route path='/peso'>
          <Pesos/>
        </Route>
        <Route path='/temps'>
            <Temp/>
        </Route>
        <Route path='/money'>
            <Money/>
        </Route>
        <Route path='/'>
          <Page/>
        </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
