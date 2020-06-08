import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux'


function Journals(props) {
   console.log(props)
        return (
           <Fragment>
               <Navigation/>
              <Container fluid>
              <h2>Your Journal</h2>
              <h3>Pages from Mai</h3>
              <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day 2</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <h3>Pages from June</h3>
              <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day 1 June</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day 2 June</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day 3 June</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                     <a href='/journals/123'>
                        <Button variant="primary">edit</Button>
                     </a>
                      
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              </Container>
           </Fragment>
        )
    
}
const mapStateToProps=(state)=>{
  return{
    journals: state.journals.journals
  }
}
export default connect(mapStateToProps)(Journals)