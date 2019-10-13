import React, { Component } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import CardComponent from './CardComponent';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export class Album extends Component{
  state = {
    cards: [
      {
        id: 1,
        cardTitle: 'Test',
        cardContent: 'Nice',
        cardImageURL: 'https://i.ytimg.com/vi/5_j_ilXDFxY/maxresdefault.jpg',
        cardImageTitle: 'Hello There',
        cardDescription: 'Very nice indeed'
      }
    ]
  }
  classes = useStyles();
  render(){
    return(
      <Container className={this.classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      {this.state.cards.map(card => {
        return (
          <CardComponent
            key={card.id}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
            cardImageURL={card.cardImageURL}
            cardImageTitle={card.cardImageTitle}
            cardDescription={card.cardDescription}
            />
        );
      })}
      </Grid>
      </Container>
    );
  }
}

export default Album;
