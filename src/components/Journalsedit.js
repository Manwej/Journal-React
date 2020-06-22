import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Journalview() {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Your Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/journal">Write new Page</Nav.Link>
            <Nav.Link href="/journals">What you have written so far</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Form>
              <h2> Write down your daily answers.</h2>
              <Form.Group controlId="question1">
                <Form.Label>How are you feeling today?</Form.Label>
                <Form.Control as="select">
                  <option>1-very good</option>
                  <option>2-good</option>
                  <option>3-average</option>
                  <option>4-could be better</option>
                  <option>5-bad</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="question2">
                <Form.Label>
                  Why are you feeling like you do and could you change for
                  better or worse?
                </Form.Label>
                <Form.Control type="text" placeholder="answer" />
              </Form.Group>
              <Form.Group controlId="question3">
                <Form.Label>What are you gratefull for today?</Form.Label>

                <Form.Control as="textarea" rows="3" placeholder="answer" />
              </Form.Group>
              <Form.Group controlId="question4">
                <Form.Label>What is your daily affirmation?</Form.Label>

                <Form.Control as="textarea" rows="3" placeholder="answer" />
              </Form.Group>
              <Form.Group controlId="question5">
                <Form.Label>What could you have done better today?</Form.Label>

                <Form.Control as="textarea" rows="3" placeholder="answer" />
              </Form.Group>
              <Form.Group controlId="question5">
                <Form.Label>
                  What did you do today that gave you joy?
                </Form.Label>

                <Form.Control as="textarea" rows="3" placeholder="answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
