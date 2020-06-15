import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Journalsedit from './components/Journalsedit';

import Landing from './components/Landing';
import Journals from './components/Journals'
import Register from './components/Register'
import Createpage from './components/Createpage';
import {connect} from 'react-redux'

function App(props) {
  console.log(props + "hello from App")
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
const mapStateToProps = (state) => {
  console.log("state:", state);

  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(App);


{/* <Fragment>
    <div> Hallo bitschön</div>
    <Login/>
</Fragment> */}
    