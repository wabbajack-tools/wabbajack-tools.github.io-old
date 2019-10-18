import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import styles from './../assets/js/sections/infoStyle';

const useStyles = makeStyles(styles);

export default function InfoSection(){
  const classes = useStyles();
  return(
    <div className={classes.section}>
      <h2 className={classes.title}>An automated Modlist installer for TES/Fallout games</h2>
      <h5 className={classes.description}>
      Modding is hard and time-consuming. Some of us spent decades modding their favorite games,
      investing hours into downloading, installing, testing, adjusting and playing with their setup.
      Most people do not have the time to get into modding. Wabbajack tries to help all who want to
      have a working modded setup for their game of choice.
      </h5>
      <h5 className={classes.description}>
      Using a Mod Organizer 2 folder and profile, Wabbajack can generate a list of
      instructions to recreate the entire setup on another machine. Instead of following a written
      guide of a specific Modlist step by step, you can simply download the instructions, point
      Wabbajack to the file and wait for it to finish.
      </h5>

      <h3 className={classes.titleSecond}>Requirements</h3>
    </div>
  )
}
