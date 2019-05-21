export default {
  root: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '0.5rem 0.5rem 0',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover div:first-child': {
      opacity: '1'
    }
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '10rem',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    overflow: 'hidden',
    '& span': {
      width: '20%',
      height: '25%'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000',
    padding: '0.3rem',
    fontSize: '1.3rem'
  },
  emoji: {
    fontSize: '1.8rem'
  },
  delete: {
    position: 'absolute',
    top: '0',
    right: '0',
    opacity: '0',
    zIndex: '10',
    transition: 'opacity 0.3s ease-in-out',
    '& svg': {
      height: '3.5rem',
      width: '3.5rem',
      color: '#ff0a21',
      backgroundColor: 'rgb(100, 100, 100, 0.6)',
      borderRadius: '2px'
    }
  }
};
