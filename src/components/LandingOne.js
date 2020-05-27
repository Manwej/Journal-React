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
import Card from '@material-ui/core/Card';
import img from '../static/arash_asghari-min.jpg'

import '../styles/LandingOne.css'

import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className="full" >
      <Grid container spacing={3} >
      <Grid item xs={6}>
         
      </Grid>
      <Grid item xs={6}>
      <Card className="grid"  >
            <CardMedia
            src={img}
            component="img"
            alt="WTF"
            height="90%"/>
          </Card>
      </Grid>
      </Grid>
       
      </main>
    </React.Fragment>
  );
}