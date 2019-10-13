import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class AppBarComponent extends Component{
  classes = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    }
  }));
  render(){
    return(
      <div className={this.classes.root}>
      <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography varient="h6" color="inherit">
          Wabbajack
        </Typography>
      </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default AppBarComponent;
