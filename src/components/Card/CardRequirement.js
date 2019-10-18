import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles }  from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import styles from './../../assets/js/components/cardRequirementStyle';

const useStyles = makeStyles(styles);

const RouteLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props}/>);

export default function CardRequirement(props) {
  const classes = useStyles();
  const { title, image, description, link, linkName, isRoute } = props;
  return(
    <Card className={classes.card}>
    <CardActionArea
      disableTouchRipple={true}
      disableFocusRipple={true}>
      <CardMedia
        component='img'
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <h5>{title}</h5>
        {description}
      </CardContent>
    </CardActionArea>
    <CardActions>
    {isRoute ? (
      <Button size="small" className={classes.cardButton} href={link}>
        {linkName}
      </Button>
      ) : (
        <Button size="small" className={classes.cardButton} component={RouteLink}>
          {linkName}
        </Button>
      )}
    </CardActions>
  </Card>
  )
}

CardRequirement.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  isRoute: PropTypes.bool.isRequired
}
