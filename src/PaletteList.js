import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({ paletteList }) => (
  <div className="PaletteList">
    <h1>React Color Playground</h1>
    {paletteList.map(palette => (
      <h2>
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      </h2>
    ))}
  </div>
);

export default PaletteList;
