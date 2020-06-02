// import React, {  Fragment } from "react";

// export default function Test() {
//     return (
//         <Fragement>
//         <div id="landing-header">
//  		<h1>Welcome to HarborBuddy!</h1>
// 		<a href="/harbors" class="btn btn-lg btn-success">View All Harbors</a>
//         </div>
//             <ul class="slideshow">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </Fragement>
//     )
// }
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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