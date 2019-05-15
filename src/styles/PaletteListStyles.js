export default {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3333ee'
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '2rem',
    fontSize: '2rem',
    color: '#fff'
  },
  palette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    width: '100%'
  }
};
