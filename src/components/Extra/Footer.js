import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './../../assets/js/components/footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props){
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = clsx({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = clsx({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.left}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/wabbajack-tools/wabbajack"
                className={classes.block}
                target="_blank"
                >GitHub</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://discord.gg/zgbrkmA"
                className={classes.block}
                target="_blank"
                >Discord</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.patreon.com/user?u=11907933"
                className={classes.block}
                target="_blank"
                >Patreon</a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made by the{" "}
          <a
            href="https://github.com/wabbajack-tools"
            className={aClasses}
            target="_blank"
            >Wabbajack Team</a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

