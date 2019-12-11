import axios from 'axios';

export const FETCH_PAGE = 'FETCH_PAGE';

export const fetchPage = (page) => dispatch => {
  if(page === "changelog"){
    axios.get('https://raw.githubusercontent.com/wabbajack-tools/wabbajack/master/CHANGELOG.md')
    .then(res => res.data)
    .then(page =>
      dispatch({
        type: FETCH_PAGE,
        payload: page
      })
    );
  }else{
    axios.get(`https://raw.githubusercontent.com/wabbajack-tools/wabbajack-tools.github.io/code/src/assets/docs/${page}.md`)
    .then(res => res.data)
    .then(page =>
      dispatch({
        type: FETCH_PAGE,
        payload: page
      })
    );
  }
};
