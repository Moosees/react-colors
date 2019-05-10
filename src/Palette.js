import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  state = { level: 500 };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox bgColor={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-slider">
          <Slider
            defaultValue={level}
            min={100}
            max={950}
            step={50}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* NAVBAR */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Palette;
