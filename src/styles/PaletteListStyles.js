import sizes from '../styles/mediaQueries';

export default {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3333ee',
    [sizes.down("smallest")]: {
      height: '100%',
      paddingBottom: '1rem'
    }
  },
  container: {
    display: 'grid',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%',
    [sizes.down("largest")]: {
      width: '75%'
    },
    [sizes.down("medium")]: {
      width: '85%'
    }
  },
  nav: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2rem 0',
    fontSize: '2rem',
    color: '#fff',
    '& a, & span': {
      color: '#fff',
      textDecoration: 'underline',
      textTransform: 'uppercase',
      fontSize: '1.4rem',
      [sizes.down("large")]: {
        fontSize: '1.2rem'
      },
      [sizes.down("medium")]: {
        fontSize: 'inherit',
        textTransform: 'none'
      }
    },
    [sizes.down("largest")]: {
      padding: '1rem 0'
    },
    [sizes.down("large")]: {
      fontSize: '1.4rem'
    },
    [sizes.down("medium")]: {
      fontSize: '1.2rem'
    },
    [sizes.down("small")]: {
      flexWrap: 'wrap'
    },
    [sizes.down("tiny")]: {
      fontSize: '1.1rem'
    }
  },
  palette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
    width: '100%',
    [sizes.down("medium")]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [sizes.down("smallest")]: {
      gridTemplateColumns: '100%'
    }
  }
};
