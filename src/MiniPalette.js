import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '0.5rem 0.5rem 0',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '15rem',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    overflow: 'hidden',
    '& span': {
      width: '20%',
      height: '25%'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000',
    padding: '0.3rem',
    fontSize: '1.3rem'
  },
  emoji: {
    fontSize: '1.8rem'
  }
};

const MiniPalette = ({ classes, paletteName, emoji, colors, handleClick }) => {
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {colors.map(color => (
          <span
            key={`${color.name}${color.color}`}
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
