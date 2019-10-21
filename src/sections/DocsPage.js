import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import uuid from 'uuid';
import Markdown from 'markdown-to-jsx';

import { makeStyles } from '@material-ui/core/styles';

import style from './../assets/js/sections/docsPageStyle';

const useStyles = makeStyles(style);

export default function DocsPage(props){
  const classes = useStyles();
  const [markdown, setMarkdown] = useState("NOTFOUND");
  const page = props.match.params.page;
  //https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/docs/faq.md
  //https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/docs/guide.md
  axios.get(`https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/docs/${page}.md`)
  .then(res => {
    if(res.status === 200){
      setMarkdown(res.data);
    }
  })
  return(
    <div className={classes.section}>
      <Markdown
        children={markdown}
        />
    </div>
  );
}
