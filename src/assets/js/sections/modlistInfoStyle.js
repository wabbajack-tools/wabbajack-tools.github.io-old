import { title } from '../globalStyle';

const modlistInfoStyle = {
  section: {
    padding: '70px 0'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    color: '#03DAC6'
  },
  description: {
    marginTop: '16px'
  },
  readme: {
    marginTop: '16px'
  },
  image: {
    width: '100%'
  },
  chips: {
    marginTop: '10px',
    display: "flex"
  },
  divider: {
    marginTop: '12px',
    background: 'rgba(255, 255, 255, 0.4)'
  },
  chip: {
    background: '#3700B3',
    color: 'white',
    marginLeft: '4px'
  },
  mdTitle: {
    ...title,
    color: 'white',
    marginTop: '20px',
    fontSize: '24px'
  },
  mdTitleh3: {
    fontSize: '22px'
  },
  mdTitleh4: {
    fontSize: '20px'
  },
  buttons: {
    marginTop: '10px',
    display: 'flex'
  },
  button: {
    background: '#C7FC86'
  },
  backButton: {
    color: 'white',
    float: 'right!important'
  },
  link: {
    color: '#BB86FC'
  }
}

export default modlistInfoStyle;
