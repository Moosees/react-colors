/* eslint-disable no-dupe-keys */
import sizes from '../styles/mediaQueries';
import background from './Dalmatian-Spots.svg';
import { FADE_TIME } from '../constants';

export default {
  '@global': {
    '.fade-enter': {
      opacity: 0
    },
    '.fade-enter-active': {
      opacity: 1,
      transition: `opacity ${FADE_TIME}ms ease-out`
    },
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: `opacity ${FADE_TIME}ms ease-out`
    }
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'scroll',
    paddingBottom: '1rem',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#405cff',
    backgroundImage: `url('${background}')`
  },
  container: {
    display: 'grid',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%',
    [sizes.down('largest')]: {
      width: '75%'
    },
    [sizes.down('medium')]: {
      width: '85%'
    }
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '2px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    [sizes.down('largest')]: {
      margin: '0.5rem 0'
    }
  },
  heading: {
    fontSize: '2rem',
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff3932+0,f2fc2f+25,30ff6a+50,28acff+75,ff00ff+100 */
    background: 'rgb(255,57,50)',
    background:
      '-moz-linear-gradient(left, rgba(255,57,50,1) 0%, rgba(242,252,47,1) 25%, rgba(48,255,106,1) 50%, rgba(40,172,255,1) 75%, rgba(255,0,255,1) 100%)',
    background:
      '-webkit-linear-gradient(left, rgba(255,57,50,1) 0%,rgba(242,252,47,1) 25%,rgba(48,255,106,1) 50%,rgba(40,172,255,1) 75%,rgba(255,0,255,1) 100%)',
    background:
      'linear-gradient(to right, rgba(255,57,50,1) 0%,rgba(242,252,47,1) 25%,rgba(48,255,106,1) 50%,rgba(40,172,255,1) 75%,rgba(255,0,255,1) 100%)',
    filter:
      'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ff3932", endColorstr="#ff00ae",GradientType=1 )',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [sizes.down('small')]: {
      fontSize: '1.8rem'
    }
  },
  buttons: {
    height: '100%',
    '& a, & span': {
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'underline',
      fontSize: '1.4rem',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: '#bbb'
      },
      [sizes.down('small')]: {
        fontSize: '1.2rem'
      }
    }
  },
  palette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
    width: '100%',
    [sizes.down('medium')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [sizes.down('smallest')]: {
      gridTemplateColumns: '100%'
    }
  }
};
