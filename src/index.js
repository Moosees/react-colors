import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiRemfix from './styles/muiRemFix';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename="/react-colors">
    <MuiThemeProvider theme={muiRemfix}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
