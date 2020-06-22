import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/allpages">Your Journal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/newpage">Write new Page</Nav.Link>
          <Nav.Link href="/allpages">What you have written so far</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
