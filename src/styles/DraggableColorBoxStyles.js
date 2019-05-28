import chroma from 'chroma-js';
import sizes from './mediaQueries';

export default {
  root: {
    cursor: 'grab',
    position: 'relative',
    backgroundColor: ({ bgColor }) => bgColor,
    [sizes.down('smallest')]: {
      height: '5%'
    }
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '0 0.7rem 0.5rem 1rem',
    fontSize: '1.4rem',
    color: ({ bgColor }) =>
      chroma(bgColor).luminance() <= 0.08 ? '#dadada' : '#333',
    [sizes.down('medium')]: {
      fontSize: '1rem'
    }
  },
  deleteIcon: {
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.4)',
      color: '#777'
    }
  }
};
