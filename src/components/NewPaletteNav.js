import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from '../styles/NewPaletteNavStyles';
import NewPaletteFormDialogs from './NewPaletteFormDialogs';

const NewPaletteNav = ({
  classes,
  history,
  handleDrawerOpen,
  savePalette,
  paletteNames,
  open,
  colors,
  clearPalette
}) => {
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
          <h4 className={classes.heading}>Create a Palette!</h4>
          <div className={classes.buttons}>
            <NewPaletteFormDialogs
              paletteNames={paletteNames}
              savePalette={savePalette}
              colors={colors}
              history={history}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
            >
              Clear
            </Button>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(NewPaletteNav);