import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Journalsedit from './components/Journalsedit';

import Landing from './components/Landing';
import Journals from './components/Journals'
import Register from './components/Register'
import Journalview from './components/Journalview';
function App() {
  return(
    <Router>
      <Switch>
        <Route exact path= '/'>
          <Landing/>
         {/* // <Journalview/> */}
        </Route>
        <Route exact path= '/journal'>
          <Journalview/> 
        </Route>
        <Route exact path ='/journals'>
          <Journals/>
        </Route>
        <Route exact path ='/journal/:id'>
          <Journalsedit/>
        </Route>
        <Route exact path ='/login'>
          <Login/>
        </Route>
        <Route exact path ='/register'>
          <Register/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;


{/* <Fragment>
    <div> Hallo bitschön</div>
    <Login/>
</Fragment> */}
    