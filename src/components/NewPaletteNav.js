import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import styles from '../styles/NewPaletteNavStyles';

const NewPaletteNav = ({
  classes,
  handleDrawerOpen,
  handleSave,
  paletteNames,
  open,
  setColors
}) => {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [newPaletteEmoji, setNewPaletteEmoji] = useState(':D');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
      paletteNames.every(
        paletteName =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, paletteNames]);

  return (
    <AppBar
      color="default"
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.navbar}>
          <Typography variant="h4">Create new palette!</Typography>
          <ValidatorForm
            onSubmit={() => handleSave(newPaletteName, newPaletteEmoji)}
          >
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={e => setNewPaletteName(e.target.value)}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Please name your palette',
                'Name is already in use'
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </ValidatorForm>
          <div className={classes.buttons}>
            <Button variant="contained" color="primary">
              Save Palette
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setColors([])}
            >
              Clear palette
            </Button>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Go back
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(NewPaletteNav);
