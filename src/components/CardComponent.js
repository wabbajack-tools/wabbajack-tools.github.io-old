import React, { Component } from 'react';
import { Grid, Card, CardActions, CardMedia, Typography, makeStyles, CardContent, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export class CardComponent extends Component{
  classes = useStyles();
  render(){
    return(
      <Grid item key={this.props.key} xs={12} sm={6} md={4}>
        <Card className={this.classes.card}>
          <CardMedia
            className={this.classes.cardMedia}
            image={this.props.imageURL}
            title={this.props.imageTitle}/>
          <CardContent className={this.classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.cardTitle}
            </Typography>
            <Typography>
              {this.props.cardDescription}
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
