import React, { Component } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import CardComponent from './CardComponent';

export class Album extends Component{
  state = {
    cards: [
      {
        id: 1,
        Title: 'Lexy\'s LOTD for Wabbajack',
        Image: 'https://i.ytimg.com/vi/Sk_ejbczO28/hqdefault.jpg',
        ImageTitle: 'Hello There',
        Description: 'Something'
      },
      {
        id: 2,
        Title: 'Unofficial Bevilex Autoinstaller',
        Image: 'https://i.ytimg.com/vi/olcx0zqXszk/maxresdefault.jpg',
        ImageTitle: 'Hello There',
        Description: 'Something #2'
      },
      {
        id: 3,
        Title: 'Unofficial Viva New Vegas Installer',
        Image: 'https://ohmy.disney.com/wp-content/uploads/2014/03/Deep-Thoughts-with-Kronk-Self-Affirmation.png',
        ImageTitle: 'Hello There',
        Description: 'Something #3'
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
