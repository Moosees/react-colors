import React, { useMemo } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { gatherShades } from '../helpers/singleColorHelpers';
import styles from '../styles/SingleColorPaletteStyles';

const SingleColorPalette = ({
  classes,
  palette,
  paletteId,
  colorId,
  format,
  changeFormat
}) => {
  const shades = useMemo(() => gatherShades(palette, colorId), [
    palette,
    colorId
  ]);

  const colorBoxes = shades.map(shade => (
    <div className={classes.shadesBox} key={shade.base.id}>
      <ColorBox
        key={shade.ds.id}
        name={shade.ds.name}
        bgColor={shade.ds[format]}
      />
      <ColorBox
        key={shade.base.id}
        name={shade.base.name}
        bgColor={shade.base[format]}
      />
      <ColorBox
        key={shade.s.id}
        name={shade.s.name}
        bgColor={shade.s[format]}
      />
    </div>
  ));

  console.log(shades);

  return (
    <div className={classes.root}>
      <Navbar format={format} changeFormat={changeFormat} />
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
