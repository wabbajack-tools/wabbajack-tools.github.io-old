import React, { Component } from 'react';
import { Grid, Card, CardActions, CardMedia, Typography, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import cardStyle from '../assets/components/cardStyle';

export class CardComponent extends Component{
  render(){
    return(
      <Grid item key={this.props.key} xs={12} sm={6} md={4}>
        <Card className={cardStyle.card}>
          <CardMedia
            component="img"
            className={cardStyle.media}
            image={this.props.Image}
            title={this.props.ImageTitle}/>
          <CardContent className={cardStyle.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.Title}
            </Typography>
            <Typography>
              {this.props.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={this.props.Link}>
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

CardComponent.propTypes = {
  card: PropTypes.object.isRequired
};

export default CardComponent;
