import React, { Component } from 'react';
import { Link, Typography } from '@material-ui/core';

export class Copyright extends Component{
  render(){
    return(
      <Typography variant="body2" color="textSecondary" align="Center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/wabbajack-tools">Wabbajack</Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>
    );
  }
}

export default Copyright;
