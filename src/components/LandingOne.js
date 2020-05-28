import React from 'react';
import img from '../static/arash_asghari-min.jpg'
import img2 from '../static/noah_buschner-min.jpg'
import img3 from '../static/taylor_simpson-min.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




import '../styles/LandingOne.css'

export default function LandingOne() {
  return (
    <Container fluid className="full">
    
      <div className="mosaic">
        <div className="headline">
          <p>Welcome to</p>
          <h1>Your Journal</h1>
          <a href="/journal">
            <Button variant="outline-light" className="bttn">
              View your journal
            </Button>
          </a>
        </div>
        <div className="coverpicture">
          <img src={img} alt="cover" className="pic1"/>
        </div>
        <div className="leftpicture">
        <img src={img2} alt="cover" className="pic2"/>
        </div>
        <div className="rightpicture">
          <img src={img3} alt="cover" className="pic3"/>
        </div>

      </div>
    
  </Container>
  );
}