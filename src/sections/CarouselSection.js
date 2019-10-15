import React from 'react';
import axios from 'axios';

import CardCarousel from './../components/Card/CardCarousel';

export default function InfoSection() {
  let modlists = {};
  if(process.env.NODE_ENV === "production"){
    axios
      .get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/states/modlistState.json')
      .then(res => {
        modlists = res.data;
      })
  }else{
    modlists = require('./../assets/states/modlistState.json');
  }
  return (
    <CardCarousel cards={modlists}/>
  );
}
