import React from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3333ee'
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '2rem',
    fontSize: '2rem',
    color: '#fff'
  },
  palette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    width: '100%'
  }
};

const PaletteList = ({ classes, paletteList }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <nav className={classes.nav}>
        <h1>React Color Playground</h1>
      </nav>
      <div className={classes.palette}>
        {paletteList.map(palette => (
          <MiniPalette {...palette} key={palette.id} />
        ))}
      </div>
    </div>
  </div>
);

export default withStyles(styles)(PaletteList);
