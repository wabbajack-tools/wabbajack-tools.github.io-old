import React, { Component } from 'react';
import clsx from 'clsx';
import uuid from 'uuid';
import Markdown from 'markdown-to-jsx';
import underscore from 'underscore';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchModlists } from './../actions/modlistsAction';
import { fetchReadme, setModlist } from './../actions/modlistInfoAction';

import { getGameName } from './../utils/Games';

import { withStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import style from './../assets/js/sections/modlistInfoStyle';

class ModlistInfo extends Component{
  componentDidMount(){
    if(this.props.modlists.length === 0){
      this.props.fetchModlists();
    }else{
      let modlist = underscore.find(this.props.modlists, (current) => {
        return current.links.machineURL === this.props.url;
      });
      this.props.setModlist(modlist);
      this.props.fetchReadme(modlist.links.readme);
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      if(this.props.modlists.length > prevProps.modlists.length){
        let modlist = underscore.find(this.props.modlists, (current) => {
          return current.links.machineURL === this.props.url;
        });
        this.props.setModlist(modlist);
        this.props.fetchReadme(modlist.links.readme);
      }
    }
  }
  render(){
  const { classes } = this.props;
  return(
    <div className={classes.section}>
    <Button href="/gallery" className={classes.backButton} size="small" startIcon={<ArrowBackIcon/>} variant="outlined">Back to Gallery</Button>
    <h2 className={classes.title}>{this.props.modlist.title}</h2>
    {this.props.modlist.links.image !== "" ?
    <img src={this.props.modlist.links.image} className={classes.image} alt={uuid.v4()}/>
    : (<React.Fragment/>)}
    <Typography variant="caption">Created by {this.props.modlist.author}, current version: {this.props.modlist.version}</Typography>
    <div className={classes.chips}>
        <Chip
          key={uuid.v4()}
          label={getGameName(this.props.modlist.game)}
          className={classes.chip}
          size="small"
          />
        {this.props.modlist.official ?
          <Chip
            key={uuid.v4()}
            label="Official"
            className={classes.chip}
            size="small"/>
          : (<React.Fragment/>)}
      </div>
      <Divider className={classes.divider}/>
      <Typography variant="body1" className={classes.description}>{this.props.modlist.description}</Typography>
      <Divider className={classes.divider}/>
      {/*<div><Typography variant="body2" className={classes.readme}>{readmeMD}</Typography></div>*/}
      <div>
      <Markdown
          children={this.props.readme}
          options={{
            overrides: {
              h1: {
                component: Typography,
                props: {
                  className: `${classes.mdTitle}`,
                  variant: 'h3'
                }
              },
              h2: {
                component: Typography,
                props: {
                  className: `${classes.mdTitle}`,
                  variant: 'h4'
                }
              },
              h3: {
                component: Typography,
                props: {
                  className: `${clsx(classes.mdTitle, classes.mdTitleh3)}`,
                  variant: 'h5'
                }
              },
              h4: {
                component: Typography,
                props: {
                  className: `${clsx(classes.mdTitle, classes.mdTitleh4)}`,
                  variant: 'h6'
                }
              },
              p: {
                component: Typography
              },
              a: {
                props: {
                  className: `${classes.link}`
                }
              },
              img: {
                props: {
                  className: `${classes.image}`
                }
              }
            }
          }}
          />
      </div>
      <Divider className={classes.divider}/>
      <div className={classes.buttons}>
          <Button href={this.props.modlist.links.download} className={classes.button} size="small" startIcon={<GetAppIcon/>} variant="contained">Download</Button>
      </div>
    </div>
  );
  }
}

ModlistInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchReadme: PropTypes.func.isRequired,
  setModlist: PropTypes.func.isRequired,
  fetchModlists: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  modlists: state.modlists.items,
  modlist: state.modlistInfo.item,
  readme: state.modlistInfo.readme,
  url: ownProps.match.params.url
});

export default connect(mapStateToProps, { fetchReadme, setModlist, fetchModlists })(withStyles(style)(ModlistInfo));
