import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import styles from '../styles/NavbarStyles';
import useToggle from '../hooks/useToggle';

const Navbar = ({ classes, level, changeLevel, format, changeFormat }) => {
  const [snackbarOpen, toggleSnackbarOpen] = useToggle(false);

  const handleFormatChange = e => {
    toggleSnackbarOpen();
    changeFormat(e.target.value);
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
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX: #eeeeee</MenuItem>
          <MenuItem value="rgb">RGB: rgb(238, 238, 238)</MenuItem>
          <MenuItem value="rgba">RGBA: rgba(238, 238, 238, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed!</span>}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={toggleSnackbarOpen}
        action={[
          <IconButton
            onClick={toggleSnackbarOpen}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </nav>
  );
};

export default withStyles(styles)(Navbar);
