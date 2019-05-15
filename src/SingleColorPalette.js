import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { gatherShades } from './singleColorHelpers';

const SingleColorPalette = ({ palette, paletteId, colorId }) => {
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
    <div className="SingleColorPalette Palette">
      <Navbar changeFormat={changeFormat} />
      <div className="Palette-colors">
        {colorBoxes}
        <Link to={`/palette/${paletteId}`}>
          <div className="ColorBox" style={{ backgroundColor: '#000' }}>
            <button className="ColorBox-btn ColorBox-btn-copy ColorBox-btn-back">
              Go Back
            </button>
          </div>
        </Link>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
export default SingleColorPalette;
