import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Landing from './components/Landing';
import LandingOne from './components/LandingOne';

import Footer from './components/Footer'
import Register from './components/Register'
import Journalview from './components/Journalview';


function App() {
  return(

    <Router>
      <Switch>
        <Route exact path= '/'>
          <LandingOne/>
         {/* // <Journalview/> */}
        </Route>
        <Route exact path= '/journal'>
          <Journalview/> 
        </Route>
        <Route exact path ='/landing'>
          <Landing/>
        </Route>
        <Route exact path= '/journal'>

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
    