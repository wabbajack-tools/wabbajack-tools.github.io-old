import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import styles from './../../assets/js/components/footerStyle';

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <div className={classes.container}>
      <div className={classes.left}>
        <List className={classes.left}>
          <ListItem className={classes.listItem}>
            <a
              href="https://github.com/wabbajack-tools/wabbajack"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              href="https://discord.gg/wabbajack"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              >Discord</a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              href="https://www.patreon.com/user?u=11907933"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              >Patreon</a>
          </ListItem>
        </List>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()}, made by the{" "}
        <a
          href="https://github.com/wabbajack-tools"
          className={classes.a}
          target="_blank"
          rel="noopener noreferrer"
          >Wabbajack Team</a>
      </div>
    </div>
  </footer>
  )
}
