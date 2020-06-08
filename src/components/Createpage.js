import React, { Component, Fragment, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import {connect} from 'react-redux'
import {fetchJournal} from '../store/actions/journalsActions'

function Createpage(props) {
   const [state, setState] = useState("")

    const handleChange=(e)=>{
      setState(e.target.value)
   }
    const handleSubmit=(e)=>{
    e.preventDefault()
    props.fetchJournal()
    }
    console.log(props)
    useEffect(() => {
      props.fetchJournal()
    }, [])
   
        return (
           <Fragment>
             <Navigation/>
              <Container>
              <Row>
                <Col>
                <Form>
                  <h2> Write down your daily answers.</h2>
                      <Form.Group controlId="question1">
                        <Form.Label>How are you feeling today?</Form.Label>
                        <Form.Control as="select" onChange={handleChange}>
                          <option>1-very good</option>
                          <option>2-good</option>
                          <option>3-average</option>
                          <option>4-could be better</option>
                          <option>5-bad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="question2">
                        <Form.Label>Why are you feeling like you do and could you change for better or worse?</Form.Label>
                        <Form.Control type="text" placeholder="answer" />
                      </Form.Group>
                      <Form.Group controlId="question3">
                      <Form.Label>What are you gratefull for today?</Form.Label>
                    
                        <Form.Control as="textarea" rows="3" placeholder="answer" onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group controlId="question4">
                      <Form.Label>What is your daily affirmation?</Form.Label>
                    
                        <Form.Control as="textarea" rows="3" placeholder="answer"/>
                      </Form.Group> 
                      <Form.Group controlId="question5">
                      <Form.Label>What could you have done better today?</Form.Label>
        
                        <Form.Control as="textarea" rows="3" placeholder="answer"/>
                      </Form.Group>
                      <Form.Group controlId="question5">
                      <Form.Label>What did you do today that gave you joy?</Form.Label>
                    
                        <Form.Control as="textarea" rows="3" placeholder="answer"/>
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                      </Button>
                </Form>
                </Col>
              </Row>
              </Container>
           </Fragment>
        )
    
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchJournal: ()=>dispatch(fetchJournal())
    //fetchJournal: (project)=>dispatch(fetchJournal(project))
  }
}

export default connect(null, mapDispatchToProps)(Createpage)// null ist first param which is the state(mapstatetoProps)