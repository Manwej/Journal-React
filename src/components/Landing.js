import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import '../styles/Landing.css'

export default function Album() {
  return (
    <React.Fragment>
          <Container maxWidth="sm">
            <div id="landing-header">
 		        <h1>Welcome to Your Journal!</h1>
                <Link href='/journal'>
                <Button variant="contained" color="primary">
                    View Your Journal
                </Button>
                </Link>
            </div>
            <ul className="slideshow">
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
            </ul>
          </Container>
    </React.Fragment>
  );
}