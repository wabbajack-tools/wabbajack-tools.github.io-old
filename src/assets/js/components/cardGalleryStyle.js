import {card, elevation8} from './../globalStyle';

const cardGalleryStyle = {
  card: {
    ...card,
    background: elevation8,
    color: 'white'
  },
  classHeader: {
    textAlign: 'left',
    color: '#C7FC86',
    maxHeight: '12px',
    marginLeft: '6px',
    marginBottom: '12px',
    display: 'inline-block'
  },
  cardTitle: {
    color: '#03DAC6',
    fontSize: '18px'
  },
  cardMedia: {
    width: '100%',
    display: 'inline-flex'
  },
  cardBody: {
    marginTop: '6px',
    fontSize: '14px',
    textAlign: 'left'
  },
  cardButton: {
    textAlign: 'left',
    color: '#C7FC86'
  }
}

export default cardGalleryStyle;
