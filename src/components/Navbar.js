import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MuiThemeProvider } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';
import theme from '../styles/muiRemFix';

const Navbar = ({ classes, level, changeLevel, format, changeFormat }) => {
  const [open, setOpen] = useState(false);

  const handleFormatChange = e => {
    setOpen(true);
    changeFormat(e.target.value);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <nav className={classes.root}>
      <Link to="/" className={classes.logo}>
        color playground
      </Link>
      {level && (
        <div className={classes.sliderContainer}>
          <span>Level: {level}</span>
          <span
            className={classes.sliderBtn}
            onClick={level > 100 && (() => changeLevel(level - 100))}
          >
            -
          </span>
          <span
            className={classes.sliderBtn}
            onClick={level < 900 && (() => changeLevel(level + 100))}
          >
            +
          </span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={50}
              max={950}
              step={50}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.formatSelect}>
        <MuiThemeProvider theme={theme}>
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value="hex">HEX - #eeeeee</MenuItem>
            <MenuItem value="rgb">RGB - rgb(238, 238, 238)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(238, 238, 238, 1.0)</MenuItem>
          </Select>
        </MuiThemeProvider>
      </div>
      <MuiThemeProvider theme={theme}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed!</span>}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={closeSnackbar}
          action={[
            <IconButton
              onClick={closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </MuiThemeProvider>
    </nav>
  );
};

export default withStyles(styles)(Navbar);
