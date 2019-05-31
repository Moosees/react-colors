import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(({ classes, name, deleteColor }) => (
  <div className={classes.root}>
    <div className={classes.text}>
      <span>{name}</span>
      <span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => deleteColor(name)}
        />
      </span>
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);
