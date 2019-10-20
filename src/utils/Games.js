let getGameName = (game) =>{
  let gameName = '';
  switch (game){
    case 'skyrim': gameName = 'Skyrim'; break;
    case 'oblivion': gameName = 'Oblivion'; break;
    case 'skyrimspecialedition': gameName = 'Skyrim Special Edition'; break;
    case 'fallout4': gameName = 'Fallout 4'; break;
    case 'morrowind': gameName = 'Morrowind'; break;
    default: gameName = 'UNKNOWN'; break;
  };
  return gameName;
}

export {
  getGameName
};
