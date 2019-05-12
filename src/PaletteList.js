import React from 'react';
import MiniPalette from './MiniPalette';

const PaletteList = ({ paletteList }) => (
  <div className="PaletteList">
    <h1>React Color Playground</h1>
    {paletteList.map(palette => (
      <MiniPalette {...palette} key={palette.id} />
    ))}
  </div>
);

export default PaletteList;
