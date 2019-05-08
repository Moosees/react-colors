import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

const ColorBox = ({ background, name }) => (
  <CopyToClipboard text={background}>
    <div className="ColorBox" style={{ backgroundColor: background }}>
      <div className="ColorBox-copy-container">
        <div className="ColorBox-content">
          <span>{name}</span>
        </div>
        <button className="ColorBox-btn ColorBox-btn-copy">Copy</button>
      </div>
      <button className="ColorBox-btn ColorBox-btn-more">More</button>
    </div>
  </CopyToClipboard>
);

export default ColorBox;
