import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    cursor: 'move',
    position: 'relative',
    backgroundColor: ({ bgColor }) => bgColor
  }
};

const DraggableColorBox = ({ classes, bgColor }) => (
  <div className={classes.root}>{bgColor}</div>
);

export default withStyles(styles)(DraggableColorBox);
