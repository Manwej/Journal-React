import React, { Fragment, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux'
import {fetchJournal} from '../store/actions/journalsActions'


function Journals(props) {
  const [page, setPage] = useState("")

  const getDate=(str) =>{
    var ops = {year: 'numeric'}; 
    ops.month = ops.day = '2-digit'; 
    return new Date(str).toLocaleDateString(0, ops);}

    let date= new Date("2020-06-10T08:39:33.511Z")
    console.log(date.getMonth()+1)
   

  useEffect(() => {
    props.fetchJournal()
  }, [page])
  console.log(date)
   console.log(props.journals)
        return (
           <Fragment>
               <Navigation/>
              <Container fluid>
              <h2>Your Journal</h2>
              <h3>Pages from Mai</h3>
              <Row>
                <Col>
                {props.journals.map((el, index)=>{
                  console.log(el.date)
                  return <p key={index}> Hello {el.question1}</p>
                })}
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
const mapDispatchToProps=dispatch=>{
  return {
    fetchJournal: ()=>dispatch(fetchJournal())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Journals)