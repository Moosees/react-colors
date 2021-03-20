import sizes from '../styles/mediaQueries';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(4, 25%)',
    height: '89vh',
    [sizes.down('largest')]: {
      gridTemplateColumns: 'repeat(4, 25%)',
      gridTemplateRows: 'repeat(5, 20%)',
    },
    [sizes.down('small')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridTemplateRows: 'repeat(10, 10%)',
      height: '92vh',
    },
    [sizes.down('tiny')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
};

export default styles;
