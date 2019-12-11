import { title, infoColor } from '../globalStyle';

const docsStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'left'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  secondTitle: {
    color: infoColor
  },
  divider: {
    marginTop: '12px',
    background: 'rgba(255, 255, 255, 0.4)'
  }
}

export default docsStyle;
