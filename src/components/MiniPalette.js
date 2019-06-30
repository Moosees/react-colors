import React, { useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Emoji } from 'emoji-mart';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  id,
  deletePalette,
  goToPalette
}) => {
  const colorBoxes = useMemo(
    () =>
      colors.map(color => (
        <span
          key={`${color.name}${color.color}`}
          style={{ backgroundColor: color.color }}
        />
      )),
    [colors]
  );

  const handleDelete = e => {
    e.stopPropagation();
    deletePalette({ paletteName, id });
  };

  const handleClick = () => {
    goToPalette(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteRoundedIcon
          className={classes.deleteIcon}
          onClick={handleDelete}
        />
      </div>
      <div className={classes.colors}>{colorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <Emoji emoji={emoji} set="google" size={16} />
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
