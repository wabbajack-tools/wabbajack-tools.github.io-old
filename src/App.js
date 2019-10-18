import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import styles from './assets/js/indexStyle';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        </div>
      </div>
    </div>
  );
}

