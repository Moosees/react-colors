import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    maxWidth: '25rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '1rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    display: 'flex',
    flexWrap: 'wrap',
    '& span': {
      width: '3rem',
      height: '3rem'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: '#000',
    paddingTop: '1rem',
    fontSize: '1.4rem'
  },
  emoji: {
    fontSize: '2.5rem'
  }
};

const MiniPalette = ({ classes, paletteName, emoji, id, colors }) => {
  return (
    <Link to={`/palette/${id}`}>
      <div className={classes.root}>
        <div className={classes.colors}>
          {colors.map(color => (
            <span style={{ backgroundColor: color.color }} />
          ))}
        </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </Link>
  );
};

export default withStyles(styles)(MiniPalette);
