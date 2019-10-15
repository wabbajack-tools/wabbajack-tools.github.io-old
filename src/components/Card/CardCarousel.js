import React from 'react';
import Carousel from 'react-slick';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from './../Grid/GridContainer';
import GridItem from './../Grid/GridItem';
import Card from './Card';

import styles from './../../assets/js/components/carouselStyle.js';
const _ = require('underscore');

const useStyles = makeStyles(styles);

export default function CardCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  const { cards } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
          <Carousel {...settings}>
          {_.map(cards, (card) => {
            return (
            <div>
              <img src={card.Image} alt={card.ImageTitle} className="slick-image"/>
              <div className="slick-caption">
                <h4>{card.Title}</h4>
              </div>
            </div>
            );
          })}
          </Carousel>
          </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

CardCarousel.propTypes = {
  cards: PropTypes.node.isRequired
};
