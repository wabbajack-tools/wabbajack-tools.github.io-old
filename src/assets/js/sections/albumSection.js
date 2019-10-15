import { container, title } from './../globalStyle';

const albumStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  description: {
    color: '#999'
  }
};

export default albumStyle;
