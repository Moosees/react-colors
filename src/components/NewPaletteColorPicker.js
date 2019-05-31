import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js';
import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import styles from '../styles/NewPaletteColorPickerStyles';

const NewPaletteColorPicker = ({
  classes,
  colors,
  addNewColor,
  maxPaletteSize
}) => {
  const [currentColor, setCurrentColor] = useState(chroma.random().hex());
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('uniqueColorName', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
  }, [colors]);

  useEffect(() => {
    ValidatorForm.addValidationRule('uniqueColorValue', () =>
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

  const handleInput = e => {
    setNewColorName(e.target.value);
  };

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const randomColor = () => {
    setCurrentColor(chroma.random().hex());
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.randomColorBtn}
        onClick={randomColor}
      >
        Random Color
      </Button>
      <ChromePicker
        width="100%"
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        disableAlpha
      />
      <ValidatorForm onSubmit={handleAddNewColor} instantValidate={false}>
        <TextValidator
          value={newColorName}
          label="Color Name"
          variant="outlined"
          margin="none"
          className={classes.colorNameInput}
          onChange={handleInput}
          validators={['required', 'uniqueColorValue', 'uniqueColorName']}
          errorMessages={[
            'Please name your color',
            'Color is already added',
            'Name is already in use'
          ]}
        />
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
