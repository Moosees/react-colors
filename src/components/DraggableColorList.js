import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableContainer } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorListStyles';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(
  ({ classes, colors, deleteColor }) => (
    <div className={classes.root}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.color}
          bgColor={color.color}
          name={color.name}
          deleteColor={deleteColor}
        />
      ))}
    </div>
  )
);

export default withStyles(styles)(DraggableColorList);
