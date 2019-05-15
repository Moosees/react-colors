export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    height: '90%'
  },
  backBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    gridColumn: '5 / 6',
    gridRow: '4 / span 3',
    cursor: 'pointer',
    position: 'relative'
  },
  btnBack: {
    cursor: 'zoom-out',
    position: 'absolute',
    textAlign: 'center',
    border: 'none',
    textTransform: 'uppercase',
    lineHeight: '3rem',
    color: '#e9e9e9',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    top: '50%',
    left: '50%',
    width: '10rem',
    marginTop: '-1.5rem',
    marginLeft: '-5rem',
    borderRadius: 2
  }
};
