import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { gatherShades } from './singleColorHelpers';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    height: '90%'
  },
  backBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    gridColumn: '5 / 6',
    gridRow: '4 / span 3',
    cursor: 'pointer',
    position: 'relative'
  },
  btnBack: {
    cursor: 'zoom-out',
    position: 'absolute',
    textAlign: 'center',
    border: 'none',
    textTransform: 'uppercase',
    lineHeight: '3rem',
    color: '#e9e9e9',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    top: '50%',
    left: '50%',
    width: '10rem',
    marginTop: '-1.5rem',
    marginLeft: '-5rem',
    borderRadius: 2
  }
};

const SingleColorPalette = ({ classes, palette, paletteId, colorId }) => {
  const [format, setFormat] = useState('hex');
  const shades = useMemo(() => gatherShades(palette, colorId), [
    palette,
    colorId
  ]);

  const colorBoxes = shades.map(shade => (
    <ColorBox key={shade.id} name={shade.name} bgColor={shade[format]} />
  ));
  const changeFormat = newFormat => {
    setFormat(newFormat);
  };

  return (
    <div className={classes.root}>
      <Navbar changeFormat={changeFormat} />
      <div className={classes.colors}>
        {colorBoxes}
        <Link to={`/palette/${paletteId}`} className={classes.backBox}>
          <button className={classes.btnBack}>Go Back</button>
        </Link>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
export default withStyles(styles)(SingleColorPalette);
