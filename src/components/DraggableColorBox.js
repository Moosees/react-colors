import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(({ classes, name, handleDelete }) => (
  <div className={classes.root}>
    <div className={classes.text}>
      <span>{name}</span>
      <span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      </span>
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);
