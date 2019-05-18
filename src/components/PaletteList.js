import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';

const PaletteList = ({ history, classes, paletteList }) => {
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color Playground</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palette}>
          {paletteList.map(palette => (
            <MiniPalette
              {...palette}
              key={palette.id}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(PaletteList);