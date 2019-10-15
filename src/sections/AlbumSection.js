import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from './../components/Grid/GridContainer';
import GridItem from './../components/Grid/GridItem';
import Card from './../components/Card/Card';

import style from './../assets/js/sections/albumSection';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';

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
            <Card>
              <CardHeader><h3>Title</h3></CardHeader>
              <CardBody>
              <p className={classes.description}>
                Some random description
              </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
