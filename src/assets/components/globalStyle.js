import { makeStyles } from '@material-ui/core';

const globalStyle = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default globalStyle;
