import sizes from './mediaQueries';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '1rem',
    [sizes.down('medium')]: {
      margin: '0.5rem'
    }
  },
  randomColorBtn: {
    width: '100%',
    marginBottom: '0.8rem',
    fontSize: '1.2rem'
  },
  colorNameInput: {
    width: '100%',
    height: '7rem',
    marginTop: '2rem',
    [sizes.down('large')]: {
      height: '5rem'
    }
  },
  addColorBtn: {
    width: '100%',
    padding: '2rem',
    marginTop: '1.2rem',
    fontSize: '2rem',
    [sizes.down('large')]: {
      padding: '1.5rem',
      fontSize: '1.6rem'
    },
    [sizes.down('small')]: {
      padding: '1rem',
      fontSize: '1.2rem'
    }
  }
};
