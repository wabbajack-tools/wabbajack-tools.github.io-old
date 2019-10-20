import { title } from './../globalStyle';

const modlistGalleryStyle = {
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
  left: {
    textAlign: 'left'
  },
  searchOptions: {
    marginRight: '32pt',
    marginLeft: '32pt'
  },
  formControl: {
    float: 'right!important'
  },
  formControlText: {
    color: 'white'
  },
  select: {
    width: '240px',
    color: 'black',
    //background: '#C7FC86',
    background: 'white',
    textAlign: 'left',
    paddingLeft: '10px'
  }
}

export default modlistGalleryStyle;
