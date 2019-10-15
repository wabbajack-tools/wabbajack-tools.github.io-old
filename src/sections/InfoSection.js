import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import styles from '../assets/js/sections/infoSectionStyle';

const useStyles = makeStyles(styles);

export default function InfoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
    <GridContainer justify="center">
    <GridItem xs={12} sm={12} md={10}>
      <h2 className={classes.title}>An automated modlist installer for TES/Fallout games</h2>
      <h5 className={classes.description}>
      The general idea behind this program is fairly simple.
      Input your Mod Organizer 2 folder and profile and get a
      get a list of instructions as output. These instruction can be used by other
      users  to automatically
      recreate the contents of the folder on another machine.
      Think of it as replication, but without ever distributing copyrighted
      files or syncing data between the source and destination machine.
      The end result is a program that recreate a modlist on a computer while
      respecting the rights of the game publisher and the mod authors.
      </h5>
    </GridItem>
    </GridContainer>
    </div>
  );
}
