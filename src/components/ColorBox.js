import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from '../styles/ColorBoxStyles';

const ColorBox = ({ classes, name, bgColor, moreUrl }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      let copyTimer = setTimeout(() => {
        setCopied(false);
      }, 1500);
      return () => clearTimeout(copyTimer);
    }
  }, [copied]);

  const handleCopy = () => {
    setCopied(true);
  };

  const handleClick = e => {
    e.stopPropagation();
  };

  return (
    <CopyToClipboard text={bgColor} onCopy={handleCopy}>
      <div className={classes.root}>
        <div style={{ visibility: !copied && 'hidden' }}>
          <div
            className={classNames(classes.copyOverlay, {
              [classes.copyOverlayShow]: copied
            })}
          />
          <div
            className={classNames(classes.copyMsg, {
              [classes.copyMsgShow]: copied
            })}
          >
            <h1>Copied!</h1>
            <p className={classes.btnText}>{bgColor}</p>
          </div>
        </div>
        <div>
          <div className={classes.mainText}>{name}</div>
          <button className={classNames(classes.btn, classes.btnCopy)}>
            <span className={classes.btnText}>Copy</span>
          </button>
          {moreUrl && (
            <Link to={moreUrl} onClick={handleClick}>
              <button className={classNames(classes.btn, classes.btnMore)}>
                <span className={classes.btnText}>More</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
