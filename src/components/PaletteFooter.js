import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Emoji } from 'emoji-mart';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ classes, paletteName, emoji }) => (
  <footer className={classes.root}>
    <span className={classes.title}>{paletteName}</span>
    <Emoji emoji={emoji} set="google" size={16} />
  </footer>
);

export default withStyles(styles)(PaletteFooter);
