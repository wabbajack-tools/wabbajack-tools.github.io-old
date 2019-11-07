const getGameName = (game) =>{
  let gameName = '';
  if(game === undefined) return;
  switch (game.toLowerCase()){
    case 'skyrim': gameName = 'Skyrim'; break;
    case 'oblivion': gameName = 'Oblivion'; break;
    case 'skyrimspecialedition': gameName = 'Skyrim Special Edition'; break;
    case 'fallout4': gameName = 'Fallout 4'; break;
    case 'morrowind': gameName = 'Morrowind'; break;
    case 'skyrimvr': gameName = 'Skyrim VR'; break;
    default: gameName = 'UNKNOWN'; break;
  };
  return gameName;
}

export {
  getGameName
};
