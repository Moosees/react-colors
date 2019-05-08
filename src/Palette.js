import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

const Palette = ({ palette }) => {
  const colorBoxes = palette.colors.map(color => (
    <ColorBox bgColor={color.color} name={color.name} />
  ));

  return (
    <div className="Palette">
      {/* NAVBAR */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* FOOTER */}
    </div>
  );
};

export default Palette;
