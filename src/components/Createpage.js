import React, { Component, Fragment, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import {connect} from 'react-redux'
import {fetchJournal, createJournal} from '../store/actions/journalsActions'

function Createpage(props) {
   const [page, updatePage] = useState(
    //(state, newState) => ({ ...state, ...newState }),
    {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: ""
    }
  );

    const handleChange=(e)=>{
      const {name, value} = e.target // same as const name = e.target.name same for value
      updatePage({...page, [name]: value})
   }
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(page)
    console.log("hello from submit")
    props.createJournal(page)

    }
    //console.log(props)
    // useEffect(() => {
    //   props.fetchJournal()
    // }, [])
   
        return (
           <Fragment>
             <Navigation/>
              <Container>
              <Row>
                <Col>
                <Form onSubmit ={handleSubmit}>
                  <h2> Write down your daily answers.</h2>
                      <Form.Group >
                        <Form.Label>How are you feeling today?</Form.Label>
                        <Form.Control as="select" onChange={handleChange} id='question1' name='question1'>
                          <option>very good</option>
                          <option>good</option>
                          <option>average</option>
                          <option>could be better</option>
                          <option>bad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Why are you feeling like you do and could you change it for better or worse? Also, do you need to change it?</Form.Label>
                          <Form.Control type="text" placeholder="answer" id='question2' name='question2' onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>What are you gratefull for today?</Form.Label>
                          <Form.Control as="textarea" rows="3" placeholder="answer" id='question3'  name='question3' onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>What is your daily affirmation?</Form.Label>
                          <Form.Control as="textarea" rows="3" placeholder="answer" id='question4' name='question4' onChange={handleChange}/>
                      </Form.Group> 
                      <Form.Group>
                        <Form.Label>What could you have done better today?</Form.Label>
                          <Form.Control as="textarea" rows="3" placeholder="answer" id='question5'  name='question5' onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group>
                      <Form.Label>What did you do today that gave you joy?</Form.Label>
                          <Form.Control as="textarea" rows="3" placeholder="answer" id='question6' name='question6' onChange={handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
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
    createJournal: (project)=>dispatch(createJournal(project))
   // fetchJournal: ()=>dispatch(fetchJournal())
    //fetchJournal: (project)=>dispatch(fetchJournal(project))
  }
}

export default connect(null, mapDispatchToProps)(Createpage)// null ist first param which is the state(mapstatetoProps)