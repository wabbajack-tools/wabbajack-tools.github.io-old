import React, { Component } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import uuid from 'uuid';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPage } from './../actions/docsPageAction';

import { withStyles } from '@material-ui/core/styles';

import style from './../assets/js/sections/docsPageStyle';

class DocsPage extends Component{
  componentDidMount(){
    console.log(this.props);
    if(this.props.markdown === "")
      this.props.fetchPage(this.props.url);
  }
  render(){
  const { classes } = this.props;
  return(
    <div className={classes.section}>
      <Markdown
        children={this.props.markdown}
        />
    </div>
  );
  }
}

DocsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchPage: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  markdown: state.docsPage.markdown,
  url: ownProps.match.params.page
});

export default connect(mapStateToProps, { fetchPage })(withStyles(style)(DocsPage));
