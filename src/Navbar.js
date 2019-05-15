import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { withStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: 12
  }
});

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    marginRight: '1.5rem',
    padding: '0 1rem',
    fontSize: '1.4rem',
    textDecoration: 'none',
    backgroundColor: '#ebebeb'
  },
  sliderContainer: {
    display: 'flex',
    '& span': { fontSize: '1.2rem' }
  },
  slider: {
    display: 'inline-block',
    width: '34rem',
    margin: '0 1.5rem',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: 8,
      marginTop: '-1px',
      background: 'linear-gradient(90deg, #eee, #333)'
    },
    '& .rc-slider-handle': {
      height: 15,
      width: 15,
      marginLeft: '-3px',
      outline: 'none',
      boxShadow: 'none',
      backgroundColor: '#00bcd4',
      border: '2px solid #00bcd4',
      transition: 'transform 0.1s ease-in-out',
      '&:hover, &:active': {
        transform: 'scale(1.2)'
      }
    }
  },
  formatSelect: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};

const Navbar = ({ classes, level, changeLevel, changeFormat }) => {
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
    <nav className={classes.root}>
      <Link to="/" className={classes.logo}>
        color playground
      </Link>
      {level && (
        <div className={classes.sliderContainer}>
          <span>Level: {level}</span>
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
