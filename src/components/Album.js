import React, { Component } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import CardComponent from './CardComponent';
import albumStyle from "../assets/components/albumStyle";
import axios from 'axios';
const _ = require('underscore');

export class Album extends Component{
  modlistState = {};
  componentDidMount(){
    if(process.env.NODE_ENV === "production"){
      axios
        .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
        .then(res => {
          this.modlistState = res.data;
          this.forceUpdate();
        })
    }else{
      this.modlistState = require('../assets/states/modlistState.json');
      this.forceUpdate();
    }
  }
  render(){
    return(
      <div>
      <div className={albumStyle.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Featured Modlists
        </Typography>
      </Container>
      </div>
      <Container className={albumStyle.cardGrid}>
      <Grid container spacing={4}>
      {_.map(this.modlistState, (card) => {
        return (
          <CardComponent
            key={card.id}
            Title={card.Title}
            Image={card.Image}
            Author={card.Author}
            ImageTitle={card.ImageTitle}
            Description={card.Description}
            Link={card.Link}
            />
        );
      })}
      </Grid>
      </Container>
      </div>
    );
  }
}

export default Album;
