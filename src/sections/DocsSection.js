import React from 'react';
import uuid from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import style from './../assets/js/sections/docsStyle';

const useStyles = makeStyles(style);

function ListItemLink(props){
  return <ListItem button component="a" {...props}/>;
}

export default function DocsSection(){
  const classes = useStyles();
  return(
    <div className={classes.section}>
    <h2 className={classes.title}>Documentation</h2>
    <Typography variant="h5" className={classes.secondTitle}>Available Pages:</Typography>
    <Divider className={classes.divider}/>
    <div>
      <ListItemLink href="/docs/faq" key={uuid.v4()}>
        <ListItemText>FAQ</ListItemText>
      </ListItemLink>
      <ListItemLink href="/docs/guide" key={uuid.v4()}>
        <ListItemText>Guides</ListItemText>
      </ListItemLink>
      <ListItemLink href="/docs/changelog" key={uuid.v4()}>
        <ListItemText>Changelog</ListItemText>
      </ListItemLink>
    </div>
    <Divider className={classes.divider}/>
    </div>
  )
}
