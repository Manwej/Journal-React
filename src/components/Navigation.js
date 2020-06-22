import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";
import "../styles/Main.css";

function Navigation(props) {
  const handleLogout = () => {
    props.logOut(props.user);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/allpages">Your Journal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/newpage">Write new Page</Nav.Link>
          <Nav.Link href="/allpages">What you have written so far</Nav.Link>
          {props.user.token && (
            <Nav.Link className="logout" href="#" onClick={handleLogout}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return { user: state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(logOut()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
