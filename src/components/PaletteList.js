import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FADE_TIME } from '../constants';
import useToggle from '../hooks/useToggle';
import styles from '../styles/PaletteListStyles';
import MiniPalette from './MiniPalette';
import PaletteListDialogs from './PaletteListDialogs';

const PaletteList = ({
  history,
  classes,
  paletteList,
  deletePalette,
  resetPaletteList
}) => {
  const [deleteOpen, toggleDeleteOpen] = useToggle(false);
  const [resetOpen, toggleResetOpen] = useToggle(false);
  const [currentPalette, setCurrentPalette] = useState({
    paletteName: '',
    id: ''
  });

  const handleDeleteOpen = palette => {
    setCurrentPalette(palette);
    toggleDeleteOpen();
  };

  const handleResetPalettes = () => {
    toggleResetOpen();
    resetPaletteList();
  };

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const handleDelete = () => {
    toggleDeleteOpen();
    deletePalette(currentPalette.id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Color Playground</h1>
          <div className={classes.buttons}>
            <button onClick={toggleResetOpen}>Reset List</button>
            <button>
              <Link to="/palette/new">Create Palette</Link>
            </button>
          </div>
        </nav>
        <TransitionGroup className={classes.palette}>
          {paletteList.map(palette => (
            <CSSTransition
              key={palette.id}
              timeout={FADE_TIME}
              classNames="fade"
            >
              <MiniPalette
                {...palette}
                deletePalette={handleDeleteOpen}
                goToPalette={goToPalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <PaletteListDialogs
        currentPaletteName={currentPalette.paletteName}
        deleteOpen={deleteOpen}
        resetOpen={resetOpen}
        handleDeleteClose={toggleDeleteOpen}
        handleResetClose={toggleResetOpen}
        handleDelete={handleDelete}
        handleResetPalettes={handleResetPalettes}
      />
    </div>
  );
};
export default withStyles(styles)(PaletteList);
