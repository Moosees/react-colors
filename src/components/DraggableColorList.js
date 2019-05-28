import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/DraggableColorListStyles';

const DraggableColorList = SortableContainer(
  ({ classes, colors, deleteColor }) => (
    <div className={classes.root}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.color}
          bgColor={color.color}
          name={color.name}
          handleDelete={() => deleteColor(color.name)}
        />
      ))}
    </div>
  )
);

export default withStyles(styles)(DraggableColorList);
