import React, { Component } from 'react';
import { Grid, Card, CardActions, CardMedia, Typography, makeStyles, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export class CardComponent extends Component{
  classes = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    cardContent: {
      flexGrow: 1
    }
  }));
  render(){
    return(
      <Grid item key={this.props.key} xs={12} sm={6} md={4}>
        <Card className={this.classes.card}>
          <CardMedia
            component="img"
            className={this.classes.cardMedia}
            image={this.props.Image}
            title={this.props.ImageTitle}/>
          <CardContent className={this.classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.Title}
            </Typography>
            <Typography>
              {this.props.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
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
