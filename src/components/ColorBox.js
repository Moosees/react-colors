import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

class ColorBox extends Component {
  state = { copied: false };

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };

  render() {
    const { classes, name, bgColor, moreUrl } = this.props;
    const colorboxCopyShow = this.state.copied
      ? `${classes.copyOverlay} ${classes.copyOverlayShow}`
      : classes.copyOverlay;
    const colorboxMsgShow = this.state.copied
      ? `${classes.copyMsg} ${classes.copyMsgShow}`
      : classes.copyMsg;

    return (
      <CopyToClipboard text={bgColor} onCopy={this.handleCopy}>
        <div className={classes.root}>
          <div style={{visibility: !this.state.copied && 'hidden'}}>
            <div className={colorboxCopyShow} />
            <div className={colorboxMsgShow}>
              <h1>Copied!</h1>
              <p className={classes.btnText}>{bgColor}</p>
            </div>
          </div>
          <div>
            <div className={classes.mainText}>{name}</div>
            <button className={`${classes.btn} ${classes.btnCopy}`}>
              <span className={classes.btnText}>Copy</span>
            </button>
            {moreUrl && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <button className={`${classes.btn} ${classes.btnMore}`}>
                  <span className={classes.btnText}>More</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
