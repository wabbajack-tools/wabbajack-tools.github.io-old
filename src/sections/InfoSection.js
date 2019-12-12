import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import CardRequirement from './../components/Card/CardRequirement';

import styles from './../assets/js/sections/infoStyle';

const useStyles = makeStyles(styles);

export default function InfoSection(){
  const classes = useStyles();
  return(
    <div className={classes.section}>
      <h2 className={classes.title}>An automated Modlist installer</h2>
      <h5 className={classes.description}>
      Modding is hard and time-consuming. Some of us spent decades modding their favorite games,
      investing hours into downloading, installing, testing, adjusting and playing with their setup.
      Most people do not have the time to get into modding. Wabbajack tries to help all who want to
      have a working modded setup for their game of choice.
      </h5>
      <h5 className={classes.description}>
      Using a Mod Organizer 2 folder and profile or a Vortex installation, Wabbajack can generate a list of
      instructions to recreate the entire setup on another machine. Instead of following a written
      guide of a specific Modlist step by step, you can simply download the instructions, point
      Wabbajack to the file and wait for it to finish.
      </h5>

      <h3 className={classes.titleSecond}>Installing a Modlist:</h3>
      <h3 className={clsx(classes.titleSecond, classes.left)}>Requirements</h3>
      <Grid
        container
        direction="row"
        spacing={3}
        style={{paddingBottom: '30px'}}
        justify="space-around"
        alignItems="center">

        <Grid item xs>
          <CardRequirement
            title="Wabbajack"
            image="https://raw.githubusercontent.com/wabbajack-tools/wabbajack/master/Branding/PNGs/Wabba_Mouth.png"
            description="Project is available on Github"
            link="https://github.com/wabbajack-tools/wabbajack/releases"
            linkName="Download"/>
        </Grid>

        <Grid item xs>
          <CardRequirement
            title="A Modlist"
            image="https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/img/modlist_gallery-preview.png"
            description=""
            isRoute={true}
            link="/gallery"
            linkName="Browse"/>
        </Grid>

        <Grid item xs>
          <CardRequirement
            title="Nexus Mods Account"
            image="//d33v4339jhl8k0.cloudfront.net/docs/assets/580770479033604df51668fd/images/580774bfc69791634937983f/KnowledgeBaseLogo.png"
            description="A premium account is required if you want WJ to download all files automatically"
            link="https://www.nexusmods.com/"
            linkName="Visit"/>
        </Grid>
      </Grid>

      <h3 className={classes.titleSecond}>Troubleshooting</h3>
      <h5 className={classes.description}>
      If you have trouble installing/building a Modlist head over to our <a
        href="https://discord.gg/wabbajack"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}>
        Discord </a>
      and ask for help in the respective channel. If your Modlist is not in the gallery than ask
      the person who compiled it for support. Asking for support on other Discord servers or on reddit
      is only bound to have your post removed. <b>For immediate support, please visit us on the <a
      href="https://discord.gg/wabbajack"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}>
      Discord </a>.</b>
      </h5>

      <h3 className={classes.titleSecond}>Building a Modlist:</h3>
      <h3 className={clsx(classes.titleSecond, classes.left)}>Requirements</h3>
      <h5 className={classes.description}>
      (choose between MO2 or Vortex, see the supported games list on <a
      href="https://github.com/wabbajack-tools/wabbajack#supported-games-and-mod-manage"
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
      >GitHub</a> to know what mod manager you need to use)
      </h5>
      <Grid
        container
        direction="row"
        spacing={3}
        style={{paddingBottom: '30px'}}
        justify="space-around"
        alignItems="center">

        <Grid item xs>
          <CardRequirement
            title="Wabbajack"
            image="https://raw.githubusercontent.com/wabbajack-tools/wabbajack/master/Branding/PNGs/Wabba_Mouth.png"
            description="Project is available on Github"
            link="https://github.com/wabbajack-tools/wabbajack/releases"
            linkName="Download"/>
        </Grid>

        <Grid item xs>
          <CardRequirement
            title="Mod Organizer 2"
            image="https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/img/MO2.png"
            description=""
            link="https://www.nexusmods.com/skyrimspecialedition/mods/6194"
            linkName="Download"/>
        </Grid>

        <Grid item xs>
          <CardRequirement
            title="Vortex"
            image="https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/img/Vortex.png"
            description=""
            link="https://www.nexusmods.com/site/mods/1/"
            linkName="Download"/>
        </Grid>

        <Grid item xs>
          <CardRequirement
            title="Nexus Mods Account"
            image="//d33v4339jhl8k0.cloudfront.net/docs/assets/580770479033604df51668fd/images/580774bfc69791634937983f/KnowledgeBaseLogo.png"
            description="You might run into API request limits if your modlist is too huge"
            link="https://www.nexusmods.com/"
            linkName="Visit"/>
        </Grid>
      </Grid>
      <div>
      <h3 className={classes.titleSecond}>Documentation</h3>
      <Typography variant="body1">The official documentation is available <a
        href="/docs"
        className={classes.link}>
         here
      </a>
      . For the latest updates and news check out our <a
        href="https://discord.gg/wabbajack"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}>
        Discord
      </a>
      .</Typography>
      </div>
    </div>
  )
}
