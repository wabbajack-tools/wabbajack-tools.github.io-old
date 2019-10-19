import { container, defaultFont, elevation16 } from './../globalStyle';

const headerStlye = {
  appBar: {
    marginBottom: '20px',
    border: '0',
    borderRadius: '3px',
    width: '100%',
    alignItems: 'center',
    transition: 'all 150ms ease 0s',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'fixed',
    zIndex: '1100'
  },
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    "&:hover, &:focus": {
      color: 'inherit',
      background: 'transparent'
    }
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF'
  },
  dark: {
    color: '#FFFFFF',
    backgroundColor: elevation16 + ' !important'
  }
}

export default headerStlye;
