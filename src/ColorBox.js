import React from 'react';
import './ColorBox.css';

const ColorBox = ({ background, name }) => (
  <div className="ColorBox" style={{ backgroundColor: background }}>
    <div className="ColorBox-copy-container">
      <div className="ColorBox-content">
        <span>{name}</span>
      </div>
      <button className="ColorBox-btn ColorBox-btn-copy">Copy</button>
    </div>
    <button className="ColorBox-btn ColorBox-btn-more">More</button>
  </div>
);

export default ColorBox;
