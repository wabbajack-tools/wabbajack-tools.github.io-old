import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import styles from './../../assets/js/components/cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody(props){
  const classes = useStyles();
  const { className, childern, ...rest } = props;
  const cardBodyClasses = clsx({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {childern}
    </div>
  )
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

