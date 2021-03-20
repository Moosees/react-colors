import { DRAWER_WIDTH } from '../constants';
import sizes from './mediaQueries';

const styles = (theme) => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [sizes.down('small')]: {
      justifyContent: 'flex-end',
    },
  },
  heading: {
    fontSize: '2rem',
    [sizes.down('largest')]: {
      fontSize: '1.7rem',
    },
    [sizes.down('large')]: {
      fontSize: '1.6rem',
    },
    [sizes.down('small')]: {
      display: 'none',
    },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    [sizes.down('smallest')]: {
      marginRight: '-1.5rem',
    },
    '& button': {
      margin: '0 2px',
      fontSize: '1.1rem',
      [sizes.down('largest')]: {
        padding: '5px 10px',
        margin: '0 1px',
      },
      [sizes.down('large')]: {
        minWidth: '46px',
        padding: '3px 5px',
      },
      [sizes.down('smallest')]: {
        padding: '2px 4px',
      },
      [sizes.down('tiny')]: {
        minWidth: '40px',
        fontSize: '1rem',
      },
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [sizes.down('large')]: {
      width: `calc(100% - ${DRAWER_WIDTH * 0.8}px)`,
      marginLeft: DRAWER_WIDTH * 0.8,
    },
    [sizes.down('medium')]: {
      width: `calc(100% - ${DRAWER_WIDTH * 0.7}px)`,
      marginLeft: DRAWER_WIDTH * 0.7,
    },
    [sizes.down('small')]: {
      width: `calc(100% - ${DRAWER_WIDTH * 0.5}px)`,
      marginLeft: DRAWER_WIDTH * 0.5,
    },
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
});

export default styles;
