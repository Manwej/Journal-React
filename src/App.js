import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Journalsedit from './components/Journalsedit';

import Landing from './components/Landing';
import Journals from './components/Journals'
import Register from './components/Register'
import Createpage from './components/Createpage';
function App() {
  return(
    <Router>
      <Switch>
        <Route exact path= '/'>
          <Landing/>
         {/* // <Journalview/> */}
        </Route>
        <Route exact path= '/newpage'>
          <Createpage/> 
        </Route>
        <Route exact path ='/allpages'>
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
    