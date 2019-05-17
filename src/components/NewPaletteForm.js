import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import DraggableColorBox from './DraggableColorBox';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import chroma from 'chroma-js';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  colorBoxContainer: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 20%)',
    gridTemplateRows: 'repeat(4, 25%)'
  }
});

const NewPaletteForm = ({ classes, history, savePalette, paletteNames }) => {
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState(chroma.random().hex());
  const [colors, setColors] = useState([
    { name: 'red', color: 'red' },
    { name: 'white', color: '#fff' },
    { name: 'black', color: '#000' }
  ]);
  const [newColorName, setNewColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
  const [newPaletteEmoji, setNewPaletteEmoji] = useState(':D');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
  }, [colors]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
      paletteNames.every(
        paletteName =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, paletteNames]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const addNewColor = () => {
    const newColor = {
      name: newColorName,
      color: currentColor
    };
    setColors([...colors, newColor]);
    setCurrentColor(chroma.random().hex());
    setNewColorName('');
  };

  const handleSave = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: newPaletteEmoji,
      colors
    };
    savePalette(newPalette);
    history.push('/');
  };

  const deleteColor = colorName => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  return (
    <main className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">Create new palette!</Typography>
          <ValidatorForm onSubmit={handleSave}>
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
              Save palette
            </Button>
          </ValidatorForm>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push('/')}
          >
            Go back
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Typography variant="h4">Design your palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentColor(chroma.random().hex())}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            label="Color Name"
            onChange={e => setNewColorName(e.target.value)}
            validators={['required', 'isColorUnique', 'isColorNameUnique']}
            errorMessages={[
              'Please name your color',
              'Color is already added',
              'Name is already in use'
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.colorBoxContainer}>
          {colors.map(color => (
            <DraggableColorBox
              key={color.color}
              bgColor={color.color}
              name={color.name}
              handleDelete={() => deleteColor(color.name)}
            />
          ))}
        </div>
      </main>
    </main>
  );
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
