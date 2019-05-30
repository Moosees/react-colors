import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import PaletteListDialogs from './PaletteListDialogs';
import styles from '../styles/PaletteListStyles';

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

  const handleDeleteOpen = ({ id, paletteName }) => {
    setCurrentPalette({ paletteName, id });
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

  const handleDelete = id => {
    deletePalette(currentPalette.id);
    setDeleteOpen(false);
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
            <CSSTransition key={palette.id} timeout={250} classNames="fade">
              <MiniPalette
                {...palette}
                handleDeleteOpen={handleDeleteOpen}
                handleClick={() => goToPalette(palette.id)}
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
