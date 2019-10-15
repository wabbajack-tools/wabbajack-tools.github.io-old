import { title } from './../globalStyle';

const cardAlbumStyle = {
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  title: {
    ...title,
    marginTop: '10px',
    minHeight: '22px',
    textDecoration: 'none'
  },
  content: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  },
  media: {
    width: '100%',
    display: 'inline-flex'
  }
}

export default cardAlbumStyle;
