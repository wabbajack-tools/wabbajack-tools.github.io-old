import React, { Component } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import CardComponent from './CardComponent';
import albumStyle from "../assets/components/albumStyle";
import modlistState from '../assets/states/modlistState';

export class Album extends Component{
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
      {modlistState.cards.map(card => {
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
