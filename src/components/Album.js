import React, { Component } from 'react';
import { Link, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export class Album extends Component{
  classes = useStyles();
  render(){
    return(
      <Container className={this.classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>

      </Grid>
      </Container>
    );
  }
}

export default Album;
