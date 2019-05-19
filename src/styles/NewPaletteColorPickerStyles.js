import { createMuiTheme } from '@material-ui/core/styles';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '1rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '0.8rem',
    '& button': {
      width: '49%',
      fontSize: '1.2rem'
    }
  },
  colorNameInput: {
    width: '100%',
    height: '7rem',
    marginTop: '2rem'
  },
  addColorBtn: {
    width: '100%',
    padding: '2rem',
    marginTop: '1.2rem',
    fontSize: '2rem'
  }
};

export const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: 14
  }
});
