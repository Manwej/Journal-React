import React, { Component, Fragment } from 'react'
import Navigation from './Navigation'
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));
export default function Journalview() {
    const classes = useStyles();
   
        return (
           <Fragment>
                <CssBaseline />
               <Navigation/>
               <main>
               <div className={classes.heroContent}>
               <div>
                   Hello world
               </div>
               <Paper>Hello World</Paper>

               </div>
              
               </main>
              
           </Fragment>
        )
    
}
