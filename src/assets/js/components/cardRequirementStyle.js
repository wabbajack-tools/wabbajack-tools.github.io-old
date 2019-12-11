import {card, elevation8} from './../globalStyle';

const cardRequirementStyle = {
  card: {
    ...card,
    background: elevation8,
    color: 'white',
    maxWidth: 345
  },
  cardMedia: {
    width: '100%',
    display: 'inline-flex'
  },
  cardButton: {
    color: '#C7FC86'
  }
}

export default cardRequirementStyle;
