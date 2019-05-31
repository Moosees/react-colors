import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import PaletteListDialogs from './PaletteListDialogs';
import styles from '../styles/PaletteListStyles';
import { FADE_TIME } from '../constants';

const PaletteList = ({
  history,
  classes,
  paletteList,
  deletePalette,
  resetPaletteList
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState({
    paletteName: '',
    id: ''
  });

  const handleDeleteOpen = palette => {
    setCurrentPalette(palette);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleResetOpen = () => {
    setResetOpen(true);
  };

  const handleResetClose = () => {
    setResetOpen(false);
  };

  const handleResetPalettes = () => {
    setResetOpen(false);
    resetPaletteList();
  };

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const handleDelete = () => {
    deletePalette(currentPalette.id);
    handleDeleteClose();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Color Playground</h1>
          <div className={classes.buttons}>
            <span style={{ marginRight: '0.6rem' }} onClick={handleResetOpen}>
              Reset List
            </span>
            <Link to="/palette/new">Create Palette</Link>
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
        handleDeleteClose={handleDeleteClose}
        handleResetClose={handleResetClose}
        handleDelete={handleDelete}
        handleResetPalettes={handleResetPalettes}
      />
    </div>
  );
};
export default withStyles(styles)(PaletteList);
