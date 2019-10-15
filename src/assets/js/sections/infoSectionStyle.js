import { title, defaultFont } from '../globalStyle';

const infoSectionStyle = {
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
  description: {
    ...defaultFont,
    textAlign: 'left',
    fontSize: "14px",
    color: 'black',
    textDecoration: 'none'
  }
}

export default infoSectionStyle;
