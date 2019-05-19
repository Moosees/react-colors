import React, { useState, useEffect } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import chroma from 'chroma-js';
import styles from '../styles/NewPaletteColorPickerStyles';
import theme from '../styles/muiRemFix';

const NewPaletteColorPicker = ({
  classes,
  colors,
  addNewColor,
  maxPaletteSize
}) => {
  const [currentColor, setCurrentColor] = useState(chroma.random().hex());
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
  }, [colors]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);

  const handleAddNewColor = () => {
    const newColor = {
      name: newColorName,
      color: currentColor
    };
    addNewColor(newColor);
    setCurrentColor(chroma.random().hex());
    setNewColorName('');
  };

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  return (
    <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          className={classes.randomColorBtn}
          onClick={() => setCurrentColor(chroma.random().hex())}
        >
          Random Color
        </Button>
      <ChromePicker
        width="100%"
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleAddNewColor}>
        <MuiThemeProvider theme={theme}>
          <TextValidator
            value={newColorName}
            label="Color Name"
            variant="outlined"
            margin="none"
            className={classes.colorNameInput}
            onChange={e => setNewColorName(e.target.value)}
            validators={['required', 'isColorUnique', 'isColorNameUnique']}
            errorMessages={[
              'Please name your color',
              'Color is already added',
              'Name is already in use'
            ]}
          />
        </MuiThemeProvider>
        <Button
          variant="contained"
          className={classes.addColorBtn}
          type="submit"
          disabled={colors.length >= maxPaletteSize}
          style={{
            backgroundColor: currentColor,
            color: chroma(currentColor).luminance() > 0.55 ? '#111' : '#fff'
          }}
        >
          {colors.length >= maxPaletteSize ? 'Palette is full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};
export default withStyles(styles)(NewPaletteColorPicker);
