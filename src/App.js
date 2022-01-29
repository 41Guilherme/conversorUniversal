import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Page from './components/JS/Page';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/'>
            <Page/>
          </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
