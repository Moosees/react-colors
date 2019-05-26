import sizes from '../styles/mediaQueries';

export default {
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '5vh',
    margin: '0 1rem',
    backgroundColor: '#fff',
    fontSize: '1.6rem',
    fontWeight: '500',
    [sizes.down('small')]: {
      height: '3vh',
      fontSize: '1.2rem',
      marginTop: '5px'
    }
  },
  emoji: {
    marginLeft: '1rem',
    fontSize: '2.5rem',
    [sizes.down('small')]: {
      fontSize: '1.5rem'
    }
  }
};
