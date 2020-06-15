import React, { Component, Fragment, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import {connect} from 'react-redux'
import {registerUser} from '../store/actions/authActions'

function Register(props) {
   const [user, updateUser] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  );

    const handleChange=(e)=>{
      const {name, value} = e.target // same as const name = e.target.name same for value
      updateUser({...user, [name]: value})
   }
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user)
    console.log("hello from submit")
    props.registerUser(user)

    }
        return (
           <Fragment>
             <Navigation/>
              <Container>
              <Row>
                <Col>
                <Form onSubmit ={handleSubmit}>
                  <h2> SignUp</h2>
                      <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} id='name' name='name'/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="asd@def.com" id='email' name='email' onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="******" id='password'  name='password' onChange={handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        SignUp
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
    registerUser: (newUser)=>dispatch(registerUser(newUser))
  }
}

export default connect(null, mapDispatchToProps)(Register)// null ist first param which is the state(mapstatetoProps)