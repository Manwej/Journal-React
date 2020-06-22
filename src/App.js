import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Journalsedit from "./components/Journalsedit";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Journals from "./components/Journals";
import Register from "./components/Register";
import Createpage from "./components/Createpage";
import { loadUser } from "./store/actions/authActions";

import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.loadUser();
  }, []);
  console.log(props.user.token);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/newpage">
          {props.user.token ? <Createpage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/allpages">
          {props.user.token ? <Journals /> : <Redirect to="/login" />}
        </Route>
        {/* <Route exact path="/journal/:id">
          <Journalsedit />
        </Route> */}
        <Route exact path="/login">
          {props.user.token ? <Redirect to="/newpage" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {props.user.token ? <Redirect to="/newpage" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
