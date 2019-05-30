import React from 'react';
import { withStyles } from '@material-ui/core';
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

const styles = {
  dialogBtn: {
    '& svg': {
      marginLeft: '4px',
      marginRight: '-8px'
    }
  }
};

const PaletteListDialogs = ({
  currentPaletteName,
  deleteOpen,
  resetOpen,
  handleDeleteClose,
  handleResetClose,
  handleDelete,
  handleResetPalettes,
  classes
}) => {
  return (
    <React.Fragment>
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
          Delete {currentPaletteName}?
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
    </React.Fragment>
  );
};

export default withStyles(styles)(PaletteListDialogs);
