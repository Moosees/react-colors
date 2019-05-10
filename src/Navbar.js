import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './Navbar.css';

const Navbar = ({ level, changeLevel, changeFormat }) => {
  const [format, setFormat] = useState('hex');
  const handleChange = e => {
    setFormat(e.target.value);
    changeFormat(e.target.value);
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <a href="#">color playground</a>
      </div>
      <div className="Navbar-slider-box">
        <span>Level: {level}</span>
        <div className="Navbar-slider">
          <Slider
            defaultValue={level}
            min={100}
            max={950}
            step={50}
            onAfterChange={changeLevel}
          />
        </div>
        <div className="Navbar-select-box">
          <Select value={format} onChange={handleChange}>
            <MenuItem value="hex">HEX - #eeeeee</MenuItem>
            <MenuItem value="rgb">RGB - rgb(238, 238, 238)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(238, 238, 238, 1.0)</MenuItem>
          </Select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
