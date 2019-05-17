import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    cursor: 'move',
    position: 'relative',
    backgroundColor: ({ bgColor }) => bgColor
  }
};

const DraggableColorBox = ({ classes, bgColor, name }) => (
  <div className={classes.root}>{name}</div>
);

export default withStyles(styles)(DraggableColorBox);
