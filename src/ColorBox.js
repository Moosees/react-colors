import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  state = { copied: false };

  render() {
    const { name, bgColor, moreUrl } = this.props;
    const colorboxCopyShow = this.state.copied
      ? ' ColorBox-copy-overlay--show'
      : '';
    const colorboxMsgShow = this.state.copied ? ' ColorBox-copy-msg--show' : '';
    const handleCopy = () => {
      this.setState({ copied: true }, () => {
        setTimeout(() => {
          this.setState({ copied: false });
        }, 1500);
      });
    };

    return (
      <CopyToClipboard text={bgColor} onCopy={handleCopy}>
        <div className="ColorBox" style={{ backgroundColor: bgColor }}>
          <div
            className={`ColorBox-copy-overlay${colorboxCopyShow}`}
            style={{ backgroundColor: bgColor }}
          />
          <div className={`ColorBox-copy-msg${colorboxMsgShow}`}>
            <h1>Copied!</h1>
            <p>{bgColor}</p>
          </div>
          <div className="ColorBox-content">
            <div className="ColorBox-text">
              <span>{name}</span>
            </div>
            <button className="ColorBox-btn ColorBox-btn-copy">Copy</button>
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <button className="ColorBox-btn ColorBox-btn-more">More</button>
            </Link>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
