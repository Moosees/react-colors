import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

class Palette extends Component {
  state = { level: 500 };
  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { classes, format, changeFormat } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        bgColor={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.shortId}`}
      />
    ));
    return (
      <div className={classes.root}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          format={format}
          changeFormat={changeFormat}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
