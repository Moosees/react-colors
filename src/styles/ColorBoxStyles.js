import chroma from 'chroma-js';

export default {
  root: {
    cursor: 'pointer',
    position: 'relative',
    letterSpacing: 2,
    fontSize: '1.1rem',
    backgroundColor: ({ bgColor }) => bgColor,
    '&:hover button': {
      opacity: 1
    }
  },
  mainText: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '0.8rem',
    color: ({ bgColor }) =>
      chroma(bgColor).luminance() <= 0.08 ? '#e9e9e9' : '#111'
  },
  btn: {
    position: 'absolute',
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    textTransform: 'uppercase',
    lineHeight: '3rem',
    color: '#e9e9e9',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  btnText: {
    color: ({ bgColor }) =>
      chroma(bgColor).luminance() >= 0.55 ? '#111' : '#fff'
  },
  btnMore: {
    cursor: 'zoom-in',
    right: 0,
    top: 0,
    height: '3rem',
    width: '6rem'
  },
  btnCopy: {
    cursor: 'copy',
    top: '50%',
    left: '50%',
    height: '3rem',
    width: '10rem',
    marginTop: '-1.5rem',
    marginLeft: '-5rem',
    borderRadius: 2,
    opacity: 0,
    transition: 'opacity 0.3s ease-in'
  },
  copyOverlay: {
    height: '100%',
    width: '100%',
    opacity: 0,
    transform: 'scale(0.1)',
    zIndex: 0,
    transition: 'transform 0.6s ease-in-out',
    backgroundColor: ({ bgColor }) => bgColor
  },
  copyOverlayShow: {
    position: 'absolute',
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 10
  },
  copyMsg: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '5rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: '#fff',
    transition: 'transform 0.3s ease-in-out',
    transitionDelay: '0.3s',
    zIndex: 0,
    '& h1': {
      width: '100%',
      marginBottom: 0,
      padding: '1rem',
      fontWeight: 400,
      textAlign: 'center',
      textShadow: '1px 2px #000',
      textTransform: 'uppercase',
      backgroundColor: ({ bgColor }) =>
        chroma(bgColor).luminance() >= 0.85
          ? 'rgba(0, 0, 0, 0.2)'
          : 'rgba(255, 255, 255, 0.2)',
      transitionDelay: 0
    },
    '& p': {
      marginTop: '0.5rem',
      fontSize: '3rem',
      fontWeight: 100
    }
  },
  copyMsgShow: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 100
  }
};
