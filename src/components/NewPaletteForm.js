import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move';
import classNames from 'classnames';
import styles from '../styles/NewPaletteFormStyles';
import DraggableColorList from './DraggableColorList';
import NewPaletteColorPicker from './NewPaletteColorPicker';
import NewPaletteNav from './NewPaletteNav';

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

  const clearPalette = () => {
    setColors([]);
  };

  const addNewColor = newColor => {
    setColors([...colors, newColor]);
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
        colors={colors}
        clearPalette={clearPalette}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
        open={open}
        paletteNames={paletteNames}
        history={history}
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
        <div className={classes.colorContainer}>
          <NewPaletteColorPicker
            colors={colors}
            addNewColor={addNewColor}
            maxPaletteSize={maxPaletteSize}
          />
        </div>
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
