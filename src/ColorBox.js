import React from 'react';
import './ColorBox.css';

const ColorBox = ({ background, name }) => (
  <div className="ColorBox" style={{ backgroundColor: background }}>
    <span>{name}</span>
    <span>MORE</span>
  </div>
);

export default ColorBox;
