import React, { useEffect, useState } from 'react';
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
import Clear from '@material-ui/icons/Clear';
import Undo from '@material-ui/icons/Undo';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const NewPaletteFormDialogs = ({
  history,
  clearOpen,
  handleClearClose,
  clearPalette,
  paletteNames,
  savePalette,
  colors
}) => {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [stage, setStage] = useState(0);

  useEffect(() => {
    ValidatorForm.addValidationRule('uniqueName', () =>
      paletteNames.every(
        paletteName =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, paletteNames]);

  const handleClose = () => {
    setStage(0);
  };

  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handleSave = emoji => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji.colons,
      colors
    };
    console.log(emoji);
    savePalette(newPalette);
    handleClose();
    history.push('/');
  };

  const handleInput = e => {
    setNewPaletteName(e.target.value);
  };

  const handleClear = () => {
    handleClearClose();
    clearPalette();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNextStage}
        disabled={colors.length === 0}
      >
        Save
      </Button>
      <Dialog
        open={stage === 1}
        onClose={handleClose}
        aria-labelledby="save-dialog-title"
      >
        <DialogTitle
          style={{ textTransform: 'uppercase' }}
          id="save-dialog-title"
        >
          Save palette
        </DialogTitle>
        <DialogContent>
          <ValidatorForm onSubmit={handleNextStage} instantValidate={false}>
            <DialogContentText
              style={{ marginBottom: '2rem', marginRight: '2rem' }}
            >
              Please enter a unique name for your palette!
            </DialogContentText>
            <TextValidator
              autoFocus
              label="Palette Name"
              fullWidth
              value={newPaletteName}
              onChange={handleInput}
              validators={['required', 'uniqueName']}
              errorMessages={[
                'Please name your palette',
                'Name is already in use'
              ]}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Confirm
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
      <Dialog
        open={stage === 2}
        onClose={handleClose}
        aria-labelledby="emoji-dialog-title"
      >
        <DialogTitle
          style={{ textTransform: 'uppercase' }}
          id="emoji-dialog-title"
        >
          Pick an emoji!
        </DialogTitle>
        <DialogContent>
          <Picker set='google' onSelect={handleSave} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={clearOpen}
        onClose={handleClearClose}
        aria-labelledby="clear-dialog-title"
      >
        <DialogTitle id="clear-dialog-title" style={{ padding: '1rem 2rem 0' }}>
          Clear palette?
        </DialogTitle>
        <List>
          <ListItem button onClick={handleClearClose}>
            <ListItemAvatar style={{ color: '#333333' }}>
              <Undo />
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
          <ListItem button onClick={handleClear}>
            <ListItemAvatar style={{ color: '#cc4444' }}>
              <Clear />
            </ListItemAvatar>
            <ListItemText primary="Clear" />
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
  );
};

export default NewPaletteFormDialogs;
