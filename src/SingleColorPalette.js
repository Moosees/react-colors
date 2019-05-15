import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { gatherShades } from './singleColorHelpers';

const SingleColorPalette = ({ palette, colorId }) => {
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
    <div className="Palette">
      <Navbar changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
export default SingleColorPalette;
