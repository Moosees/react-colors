import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move';
import classNames from 'classnames';
import useToggle from '../hooks/useToggle';
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
  const [drawerOpen, toggleDrawerOpen] = useToggle(true);
  const [colors, setColors] = useState(starterPalette);

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
        handleDrawerOpen={toggleDrawerOpen}
        savePalette={savePalette}
        open={drawerOpen}
        paletteNames={paletteNames}
        history={history}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawerOpen}>
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
          [classes.contentShift]: drawerOpen
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
