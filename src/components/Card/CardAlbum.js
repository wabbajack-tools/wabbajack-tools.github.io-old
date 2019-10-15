import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import CardHeader from './CardHeader';
import Button from './../Extra/Button';
import style from './../../assets/js/components/cardAlbumStyle';


const useStyles = makeStyles(style);

export default function CardAlbum(props){
  const classes = useStyles();
  const { title, description } = props;
  const { downloadLink, readmeLink, imageLink } = props.links;
  return (
    <Card className={classes.card}>
      {/*<CardMedia
        component="img"
        className={classes.media}
        image={imageURL}
        title={title}
      />*/}
      <img src={imageLink} alt={title} className={classes.media}/>
      <CardContent className={classes.content}>
      <h3 className={classes.title}>{title}</h3>
      {description}
      </CardContent>
      <CardActions>
        <Button
          href={readmeLink}
          target="_blank"
          rel="noopener noreferrer"
          color="transparent">
          Readme</Button>
        <Button
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          color="transparent">
          Download</Button>
      </CardActions>
    </Card>
  )
}

CardAlbum.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.node,
  imageURL: PropTypes.string,
  links: PropTypes.array
}
