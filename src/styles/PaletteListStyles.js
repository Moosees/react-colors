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
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2rem 0',
    fontSize: '2rem',
    color: '#fff',
    '& a': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: '1.4rem'
    }
  },
  palette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    width: '100%'
  }
};
