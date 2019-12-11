import { container, primaryColor } from './../globalStyle';

const footerStyle = {
  footer: {
    padding: '',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative',
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  listItem: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  link: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  }
}

export default footerStyle;
