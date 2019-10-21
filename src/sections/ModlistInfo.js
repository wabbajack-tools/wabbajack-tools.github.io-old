import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import uuid from 'uuid';
import Markdown from 'markdown-to-jsx';

import { getGameName } from './../utils/Games';

import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './../assets/js/sections/modlistInfoStyle';

const useStyles = makeStyles(styles);
const _ = require('underscore');

export default function ModlistInfo(props){
  const classes = useStyles();
  const machineURL = props.match.params.url;
  let modlists = {};
  const [readmeMD, setReadmeMD] = useState("NOTFOUND");
  axios
    .get('https://raw.githubusercontent.com/wabbajack-tools/mod-lists/master/modlists.json')
    .then(res => {modlists = res.data});
  const modlist = _.find(modlists, (current) => {
    return current.links.machineURL === machineURL
  });
  const { title, description, author, game, official, links, version } = modlist;
  const { image, readme, download } = links;
  axios.get(readme)
  .then(res => {
    setReadmeMD(res.data);
  });
  return(
    <div className={classes.section}>
    <Button href="/gallery" className={classes.backButton} size="small" startIcon={<ArrowBackIcon/>} variant="outlined">Back to Gallery</Button>
    <h2 className={classes.title}>{title}</h2>
    <img src={image} className={classes.image} alt={uuid.v4()}/>
    <Typography variant="caption">Created by {author}, current version: {version}</Typography>
    <div className={classes.chips}>
        <Chip
          key={uuid.v4()}
          label={getGameName(game)}
          className={classes.chip}
          size="small"
          />
        {official ?
          <Chip
            key={uuid.v4()}
            label="Official"
            className={classes.chip}
            size="small"/>
          : (<React.Fragment/>)}
      </div>
      <Divider className={classes.divider}/>
      <Typography variant="body1" className={classes.description}>{description}</Typography>
      <Divider className={classes.divider}/>
      {/*<div><Typography variant="body2" className={classes.readme}>{readmeMD}</Typography></div>*/}
      <div>
      <Markdown
          children={readmeMD}
          options={{
            overrides: {
              h1: {
                component: Typography,
                props: {
                  className: `${classes.mdTitle}`,
                  variant: 'h3'
                }
              },
              h2: {
                component: Typography,
                props: {
                  className: `${classes.mdTitle}`,
                  variant: 'h4'
                }
              },
              h3: {
                component: Typography,
                props: {
                  className: `${clsx(classes.mdTitle, classes.mdTitleh3)}`,
                  variant: 'h5'
                }
              },
              h4: {
                component: Typography,
                props: {
                  className: `${clsx(classes.mdTitle, classes.mdTitleh4)}`,
                  variant: 'h6'
                }
              },
              p: {
                component: Typography
              },
              a: {
                props: {
                  className: `${classes.link}`
                }
              }
            }
          }}
          />
      </div>
      <Divider className={classes.divider}/>
      <div className={classes.buttons}>
          <Button href={download} className={classes.button} size="small" startIcon={<GetAppIcon/>} variant="contained">Download</Button>
      </div>
    </div>
  );
}
