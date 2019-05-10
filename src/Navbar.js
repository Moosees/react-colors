import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({level, changeLevel}) => (
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
    </div>
  </nav>
);

export default Navbar;
