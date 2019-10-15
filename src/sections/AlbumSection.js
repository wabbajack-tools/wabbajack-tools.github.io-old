import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from './../components/Grid/GridContainer';
import GridItem from './../components/Grid/GridItem';
import CardAlbum from './../components/Card/CardAlbum';

import style from './../assets/js/sections/albumSection';

const useStyles = makeStyles(style);

export default function AlbumSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Featured Modlists:</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <CardAlbum
            title="Lemon Icebox Pie"
            links={{
              imageLink: "https://www.lovelesscafe.com/uploads/recipeimages/Lemon-Icebox-Pie-2018-web.jpg",
              readmeLink: "https://www.lovelesscafe.com/recipes/lemon-icebox-pie"
            }}
            description="This Southern Lemon Icebox pie is packed with tangy-sweet flavor. A perfect complement to any meal!"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
