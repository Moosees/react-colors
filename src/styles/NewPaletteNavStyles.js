import { DRAWER_WIDTH } from '../constants';

export default theme => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      margin: '0 2px',
      fontSize: '1.1rem'
    }
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 20,
  },
  hide: {
    display: 'none'
  }
});
