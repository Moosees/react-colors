import { DRAWER_WIDTH } from '../constants';
import sizes from './mediaQueries';

export default theme => ({
  root: {
    display: 'flex'
  },
  colorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70%'
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    [sizes.down('large')]: {
      width: DRAWER_WIDTH * 0.8
    },
    [sizes.down('medium')]: {
      width: DRAWER_WIDTH * 0.7
    },
    [sizes.down('small')]: {
      width: DRAWER_WIDTH * 0.5
    }
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    padding: '0',
    [sizes.down('large')]: {
      width: DRAWER_WIDTH * 0.8
    },
    [sizes.down('medium')]: {
      width: DRAWER_WIDTH * 0.7
    },
    [sizes.down('small')]: {
      width: DRAWER_WIDTH * 0.5
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -DRAWER_WIDTH,
    [sizes.down('large')]: {
      marginLeft: -DRAWER_WIDTH * 0.8
    },
    [sizes.down('medium')]: {
      marginLeft: -DRAWER_WIDTH * 0.7
    },
    [sizes.down('small')]: {
      marginLeft: -DRAWER_WIDTH * 0.5
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
