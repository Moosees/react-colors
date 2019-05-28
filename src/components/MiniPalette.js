import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  id,
  deletePalette,
  handleClick
}) => {
  const handleDelete = e => {
    e.stopPropagation();
    deletePalette(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteRoundedIcon
          className={classes.deleteIcon}
          onClick={handleDelete}
        />
      </div>
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
