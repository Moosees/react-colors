import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = ({ classes, paletteName, emoji, colors, handleClick }) => {
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {colors.map(color => (
          <span
            key={`${color.name}${color.color}`}
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
