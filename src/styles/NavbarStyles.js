import sizes from '../styles/mediaQueries';

export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    [sizes.down('small')]: {
      height: '4vh'
    }
  },
  logo: {
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    marginRight: '1.5rem',
    padding: '0 1rem',
    fontSize: '1.4rem',
    textDecoration: 'none',
    backgroundColor: '#ebebeb',
    [sizes.down('small')]: {
      fontSize: '1.2rem',
      padding: '0 0.5rem'
    }
  },
  sliderContainer: {
    display: 'flex',
    '& span': {
      fontSize: '1.2rem',
      [sizes.down('small')]: {
        margin: '0 0.5rem',
        fontSize: '1.2rem'
      }
    }
  },
  sliderBtn: {
    cursor: 'pointer',
    display: 'none',
    [sizes.down('medium')]: {
      display: 'inline-block'
    }
  },
  slider: {
    display: 'inline-block',
    width: '34rem',
    margin: '0 1.5rem',
    [sizes.down('large')]: {
      width: '20rem'
    },
    [sizes.down('medium')]: {
      display: 'none'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: 8,
      marginTop: '-1px',
      background: 'linear-gradient(90deg, #eee, #333)'
    },
    '& .rc-slider-handle': {
      height: 15,
      width: 15,
      marginLeft: '-3px',
      outline: 'none',
      boxShadow: 'none',
      backgroundColor: '#00bcd4',
      border: '2px solid #00bcd4',
      transition: 'transform 0.1s ease-in-out',
      '&:hover, &:active': {
        transform: 'scale(1.2)'
      }
    }
  },
  formatSelect: {
    marginLeft: 'auto',
    marginRight: '1rem',
    [sizes.down('small')]: {
      marginRight: '0',
      '& div': {
        fontSize: '1.2rem'
      }
    },
    [sizes.down('smallest')]: {
      display: 'none'
    }
  }
};
