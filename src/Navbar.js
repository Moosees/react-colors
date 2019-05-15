import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Navbar.css';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: 12
  }
});

const Navbar = ({ level, changeLevel, changeFormat }) => {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleFormatChange = e => {
    setFormat(e.target.value);
    setOpen(true);
    changeFormat(e.target.value);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <Link to="/">color playground</Link>
      </div>
      {level && (
        <div className="Navbar-slider-container">
          <span>Level: {level}</span>
          <div className="Navbar-slider">
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
      <div className="Navbar-format-select">
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

export default Navbar;
