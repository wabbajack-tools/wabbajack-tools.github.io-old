const modlists = (state = [], action) => {
  switch(action.type) {
    case 'SET_MODLISTS':
      return [
        action.modlists
      ]
    default:
      return state;
  }
}

export default modlists;
