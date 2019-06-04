import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/PaletteStyles';

const Palette = ({ classes, format, changeFormat, palette }) => {
  const { colors, paletteName, emoji, id } = palette;
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      bgColor={color[format]}
      name={color.shortName}
      key={color.id}
      moreUrl={`/palette/${id}/${color.shortId}`}
    />
  ));

  return (
    <div className={classes.root}>
      <Navbar
        level={level}
        changeLevel={setLevel}
        format={format}
        changeFormat={changeFormat}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(Palette);
