import sizes from '../styles/mediaQueries';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden'
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    height: '89vh',
    [sizes.down('largest')]: {
      gridTemplateColumns: 'repeat(4, 25%)'
    },
    [sizes.down('small')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      height: '92vh'
    },
    [sizes.down('tiny')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  shadesBox: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '100%',
    marginBottom: '1px',
    [sizes.down('tiny')]: {
      minHeight: '10%',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  },
  backBox: {
    backgroundColor: '#000',
    cursor: 'pointer',
    position: 'relative',
    [sizes.down('largest')]: {
      gridColumn: '2 / span 3'
    },
    [sizes.down('small')]: {
      gridColumn: 'auto'
    },
    [sizes.down('tiny')]: {
      minHeight: '10%'
    }
  },
  btnBack: {
    cursor: 'zoom-out',
    position: 'absolute',
    textAlign: 'center',
    border: 'none',
    textTransform: 'uppercase',
    lineHeight: '3rem',
    color: '#e9e9e9',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    top: '50%',
    left: '50%',
    width: '10rem',
    marginTop: '-1.5rem',
    marginLeft: '-5rem',
    borderRadius: 2
  }
};
