import sizes from './mediaQueries';

export default {
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    [sizes.down('large')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)'
    },
    [sizes.down('medium')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(10, 1fr)'
    },
    [sizes.down('smallest')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
};
