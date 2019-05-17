import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import chroma from 'chroma-js';

const styles = {
  root: {
    cursor: 'grab',
    position: 'relative',
    backgroundColor: ({ bgColor }) => bgColor
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '0 0.7rem 0.5rem 1rem',
    fontSize: '1.4rem',
    color: ({ bgColor }) =>
      chroma(bgColor).luminance() <= 0.08 ? '#dadada' : '#333'
  },
  deleteIcon: {
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.4)',
      color: '#777'
    }
  }
};

const DraggableColorBox = ({ classes, name }) => (
  <div className={classes.root}>
    <div className={classes.text}>
      <span>{name}</span>
      <span>
        <DeleteIcon className={classes.deleteIcon} />
      </span>
    </div>
  </div>
);

export default withStyles(styles)(DraggableColorBox);
