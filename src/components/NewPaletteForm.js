import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import DraggableColorList from './DraggableColorList';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import chroma from 'chroma-js';
import arrayMove from 'array-move';
import NewPaletteNav from './NewPaletteNav';
import styles from '../styles/NewPaletteStyles';

const NewPaletteForm = ({
  classes,
  history,
  savePalette,
  paletteNames,
  starterPalette,
  maxPaletteSize = 20
}) => {
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState(chroma.random().hex());
  const [colors, setColors] = useState(starterPalette);
  const [newColorName, setNewColorName] = useState('');

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

  const handleSave = (newPaletteName, newPaletteEmoji) => {
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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <main className={classes.root}>
      <NewPaletteNav
        handleDrawerOpen={handleDrawerOpen}
        handleSave={handleSave}
        open={open}
        paletteNames={paletteNames}
        classes={classes}
      />
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setColors([])}
          >
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
            style={{
              backgroundColor: currentColor,
              color: chroma(currentColor).luminance() > 0.55 ? '#111' : '#fff'
            }}
            type="submit"
            disabled={colors.length >= maxPaletteSize}
          >
            {colors.length >= maxPaletteSize ? 'Palette is full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          axis="xy"
          pressDelay={100}
          // distance={2}
          helperClass="dragged"
          colors={colors}
          deleteColor={deleteColor}
          onSortEnd={onSortEnd}
        />
      </main>
    </main>
  );
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
