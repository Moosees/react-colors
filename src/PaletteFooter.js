import React from 'react';

const PaletteFooter = ({ paletteName, emoji }) => (
  <footer className="Palette-footer">
    {paletteName}
    <span className="Palette-footer-emoji">{emoji}</span>
  </footer>
);

export default PaletteFooter;
