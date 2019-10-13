import React, { Component } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import CardComponent from './CardComponent';

export class Album extends Component{
  state = {
    cards: [
      {
        id: 1,
        Title: 'Test',
        Image: 'https://i.ytimg.com/vi/5_j_ilXDFxY/maxresdefault.jpg',
        ImageTitle: 'Hello There',
        Description: 'Very nice indeed'
      }
    ]
  }
  classes = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    }
  }));
  render(){
    return(
      <Container className={this.classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      {this.state.cards.map(card => {
        return (
          <CardComponent
            key={card.id}
            Title={card.Title}
            Image={card.Image}
            ImageTitle={card.ImageTitle}
            Description={card.Description}
            />
        );
      })}
      </Grid>
      </Container>
    );
  }
}

export default Album;
