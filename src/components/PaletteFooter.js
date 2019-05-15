import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ classes, paletteName, emoji }) => (
  <footer className={classes.root}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
);

export default withStyles(styles)(PaletteFooter);
