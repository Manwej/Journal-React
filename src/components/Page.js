import React, { Fragment, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Page(props) {
 let url= `/journal/${props.props._id}`
    const getDate=()=>{
        let day = new Date(props.props.date)
    console.log(day.getDay())
    
    let d = day.getDay()
    return d 
    }
   useEffect(() => {
       getDate()
   }, [])
   console.log(props)
    return (
       <Fragment>
           <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Day {getDate()} of {props.month}</Card.Title>
                      <Card.Text>
                       Answer 1: {props.props.question1}
                      </Card.Text>
                      <Card.Text>
                       Answer 2: {props.props.question2}
                      </Card.Text>
                      <Card.Text>
                       ...
                      </Card.Text>
                      <a href={url}>
                      <Button variant="primary">edit</Button>
                      </a>
                    </Card.Body>
                  </Card>
       </Fragment>
    )
}
