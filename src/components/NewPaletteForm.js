import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move';
import DraggableColorList from './DraggableColorList';
import NewPaletteNav from './NewPaletteNav';
import NewPaletteColorPicker from './NewPaletteColorPicker';
import styles from '../styles/NewPaletteFormStyles';

const NewPaletteForm = ({
  classes,
  history,
  savePalette,
  paletteNames,
  starterPalette,
  maxPaletteSize = 20
}) => {
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(starterPalette);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setColors([...colors, newColor]);
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
        setColors={setColors}
        handleDrawerOpen={handleDrawerOpen}
        handleSave={handleSave}
        open={open}
        paletteNames={paletteNames}
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
        <NewPaletteColorPicker
          colors={colors}
          addNewColor={addNewColor}
          maxPaletteSize={maxPaletteSize}
        />
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
