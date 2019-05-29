import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Warning from '@material-ui/icons/Warning';
import Undo from '@material-ui/icons/Undo';
import Delete from '@material-ui/icons/Delete';
import MiniPalette from './MiniPalette';
import { MuiThemeProvider } from '@material-ui/core/styles';
import styles from '../styles/PaletteListStyles';
import muiRemfix from '../styles/muiRemFix';

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
    paletteName: 'hej',
    id: 'hej'
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
      <MuiThemeProvider theme={muiRemfix}>
        <Dialog
          open={resetOpen}
          onClose={handleResetClose}
          aria-labelledby="reset-dialog-title"
        >
          <DialogTitle id="reset-dialog-title">Reset all palettes?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to reset all palettes? <br />
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleResetClose}
              className={classes.dialogBtn}
              color="primary"
              variant="contained"
            >
              Cancel
              <Undo />
            </Button>
            <Button
              onClick={handleResetPalettes}
              className={classes.dialogBtn}
              color="secondary"
              variant="contained"
            >
              Reset
              <Warning />
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle
            id="delete-dialog-title"
            style={{ padding: '1rem 1.5rem 0' }}
          >
            Delete {currentPalette.paletteName}?
          </DialogTitle>
          <List>
            <ListItem button onClick={handleDeleteClose}>
              <ListItemAvatar style={{ color: '#333333' }}>
                <Undo />
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
            <ListItem button onClick={handleDelete}>
              <ListItemAvatar style={{ color: '#cc4444' }}>
                <Delete />
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};
export default withStyles(styles)(PaletteList);
