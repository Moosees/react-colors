import React from 'react';
import ColorBox from './ColorBox';
import { gatherShades } from './singleColorHelpers';

const SingleColorPalette = ({ palette, colorId }) => {
  const shades = gatherShades(palette, colorId);
  const colorBoxes = shades.map(shade => (
    <ColorBox key={shade.id} name={shade.name} bgColor={shade.hex} />
  ));
  console.log(shades);

  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};
export default SingleColorPalette;
