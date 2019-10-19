import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import style from './../../assets/js/components/cardGalleryStyle';

const useStyles = makeStyles(style);

export default function CardGallery(props){
  const classes = useStyles();
  const { modlist } = props;
  const { title, author, description, links, game, official } = modlist;
  const { image, machineURL } = links;
  let gameName = game;
  switch (game){
    case 'skyrim': gameName = 'Skyrim'; break;
    case 'oblivion': gameName = 'Oblivion'; break;
    case 'skyrimspecialedition': gameName = 'Skyrim Special Edition'; break;
    case 'fallout4': gameName = 'Fallout 4'; break;
    case 'morrowind': gameName = 'Morrowind'; break;
  }
  let newURL = "modlist/"+machineURL;
  return(
    <Card className={classes.card}>
    {/*<CardHeader
      disableTypography={true}
      className={classes.classHeader}
    subheader={gameName}/>
    <span className={classes.classHeader}>{gameName}</span>*/}
    <CardMedia
      component='img'
      className={classes.cardMedia}
      image={image}
      title={title}
      />
    <CardContent>
      <Typography variant="h1" component="h2" className={classes.cardTitle}>{title} by {author}</Typography>
      <Typography variant="body2" className={classes.cardBody}>{description}</Typography>
      <Divider className={classes.cardDivider}/>
      <div className={classes.cardChipContainer}>
        <Chip
          key={uuid.v4()}
          label={gameName}
          className={classes.cardChip}
          size="small"
          />
        {official ?
          <Chip
            key={uuid.v4()}
            label="Official"
            className={classes.cardChip}
            size="small"/>
          : (<React.Fragment/>)}
      </div>
    </CardContent>
    <CardActions>
      <Button size="small" className={classes.cardButton} href={newURL}>
        <Typography variant="button">View</Typography>
      </Button>
    </CardActions>
    </Card>
  );
}

CardGallery.propTypes = {
  modlist: PropTypes.array.isRequired
}
