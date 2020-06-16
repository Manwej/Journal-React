import React, { Component, Fragment, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import {connect} from 'react-redux'
import {loginUser} from '../store/actions/authActions'

function Login(props) {
   const [user, updateUser] = useState(
    {
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
    props.loginUser(user)

    }
        return (
           <Fragment>
             <Navigation/>
              <Container>
              <Row>
                <Col>
                <Form onSubmit ={handleSubmit}>
                  <h2> Login</h2>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="asd@def.com" id='email' name='email' onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="******" id='password'  name='password' onChange={handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Login
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
    loginUser: (newUser)=>dispatch(loginUser(newUser))
  }
}

export default connect(null, mapDispatchToProps)(Login)// null ist first param which is the state(mapstatetoProps)