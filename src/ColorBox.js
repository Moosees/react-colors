import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';

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
    const { name, bgColor, moreUrl } = this.props;
    const colorboxCopyShow = this.state.copied
      ? ' ColorBox-copy-overlay--show'
      : '';
    const colorboxMsgShow = this.state.copied ? ' ColorBox-copy-msg--show' : '';
    const isDarkColor = chroma(bgColor).luminance() <= 0.08;
    const isLightColor = chroma(bgColor).luminance() >= 0.55;

    return (
      <CopyToClipboard text={bgColor} onCopy={this.handleCopy}>
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
              <span
                className={isDarkColor ? 'ColorBox-text--light' : undefined}
              >
                {name}
              </span>
            </div>
            <button className="ColorBox-btn ColorBox-btn-copy">
              <span
                className={isLightColor ? 'ColorBox-text--dark' : undefined}
              >
                Copy
              </span>
            </button>
            {moreUrl && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <button className="ColorBox-btn ColorBox-btn-more">
                  <span
                    className={isLightColor ? 'ColorBox-text--dark' : undefined}
                  >
                    More
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
