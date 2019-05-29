import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';

const PaletteList = ({
  history,
  classes,
  paletteList,
  deletePalette,
  resetPaletteList
}) => {
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Color Playground</h1>
          <div className={classes.buttons}>
            <span style={{ marginRight: '0.6rem' }} onClick={resetPaletteList}>
              Reset List
            </span>
            <Link to="/palette/new">Create Palette</Link>
          </div>
        </nav>
        <div className={classes.palette}>
          {paletteList.map(palette => (
            <MiniPalette
              {...palette}
              key={palette.id}
              id={palette.id}
              deletePalette={deletePalette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(PaletteList);
