import { title, defaultFont } from '../globalStyle';

const infoStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  titleSecond: {
    ...title,
    textDecoration: 'none',
    minHeight: '28px',
    marginTop: '26',
    color: '#03DAC6'
  },
  description: {
    ...defaultFont,
    textAlign: 'left',
    fontSize: '16px',
    color: 'white',
    textDecoration: 'none'
  },
  left: {
    textAlign: 'left'
  }
}

export default infoStyle;
