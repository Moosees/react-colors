import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '5vh',
    margin: '0 1rem',
    backgroundColor: '#fff',
    fontSize: '1.6rem',
    fontWeight: 500
  },
  emoji: {
    marginLeft: '1rem',
    fontSize: '2.5rem'
  }
};

const PaletteFooter = ({ classes, paletteName, emoji }) => (
  <footer className={classes.root}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
);

export default withStyles(styles)(PaletteFooter);
