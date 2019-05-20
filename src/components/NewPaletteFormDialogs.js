import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import theme from '../styles/muiRemFix';

const NewPaletteFormDialogs = ({
  history,
  paletteNames,
  savePalette,
  colors
}) => {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [newPaletteEmoji, setNewPaletteEmoji] = useState(':D');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', () =>
      paletteNames.every(
        paletteName =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, paletteNames]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <MuiThemeProvider theme={theme}>
        <Dialog
          open={open}
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
            <DialogContentText
              style={{ marginBottom: '2rem', marginRight: '2rem' }}
            >
              Please enter a unique name for your palette!
            </DialogContentText>
            <ValidatorForm
              onSubmit={() => handleSave(newPaletteName, newPaletteEmoji)}
            >
              <TextValidator
                autoFocus
                label="Palette Name"
                fullWidth
                value={newPaletteName}
                onChange={e => setNewPaletteName(e.target.value)}
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
                  Save
                </Button>
              </DialogActions>
            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};

export default NewPaletteFormDialogs;
