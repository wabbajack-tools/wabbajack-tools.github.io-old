import { makeStyles } from '@material-ui/core';

const cardStyle = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  content: {
    flexGrow: 1
  }
}));

export default cardStyle;
