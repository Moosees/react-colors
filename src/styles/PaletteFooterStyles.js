import sizes from '../styles/mediaQueries';

const styles = {
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
      marginTop: '1rem',
    },
  },
  title: {
    marginRight: '1rem',
  },
};

export default styles;
