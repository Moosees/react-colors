import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const NewPaletteFormDialogs = ({
  history,
  paletteNames,
  savePalette,
  colors
}) => {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [newPaletteEmoji, setNewPaletteEmoji] = useState('');
  const [stage, setStage] = useState(0);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
      paletteNames.every(
        paletteName =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, paletteNames]);

  const handleClose = () => {
    setStage(0);
  };

  const handleStage = () => {
    setStage(stage + 1);
  };

  const handleSave = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: newPaletteEmoji,
      colors
    };
    savePalette(newPalette);
    handleClose();
    history.push('/');
  };

  const handleChangeName = e => {
    setNewPaletteName(e.target.value);
  };

  const handleEmojiChange = emoji => {
    setNewPaletteEmoji(emoji.native);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleStage}>
        Save
      </Button>
      <Dialog
        open={stage === 1}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          style={{ textTransform: 'uppercase' }}
          id="form-dialog-title"
        >
          Save palette
        </DialogTitle>
        <DialogContent>
          <ValidatorForm onSubmit={handleStage}>
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
              onChange={handleChangeName}
              validators={['required', 'isPaletteNameUnique']}
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
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Picker
            onSelect={handleEmojiChange}
            title="Pick an emoji!"
            native={true}
          />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default NewPaletteFormDialogs;
