import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from '../helpers/seedColors';
import { generatePalette } from '../helpers/paletteHelpers';
import { FADE_TIME } from '../constants';

const fades = {
  '@global': {
    '.fade-enter': {
      opacity: 0
    },
    '.fade-enter-active': {
      opacity: 1,
      transition: `opacity ${FADE_TIME}ms ease-out`
    },
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: `opacity ${FADE_TIME}ms ease-out`
    }
  }
};

class App extends Component {
  state = {
    palettes: this.getLocalPalettes(),
    format: 'hex'
  };

  getLocalPalettes() {
    const localPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    return localPalettes ? localPalettes : seedColors;
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }

  changeFormat = format => {
    this.setState({ format });
  };

  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  deletePalette = paletteId => {
    this.setState(
      {
        palettes: this.state.palettes.filter(
          palette => palette.id !== paletteId
        )
      },
      this.syncLocalStorage
    );
  };

  resetPaletteList = () => {
    this.setState({ palettes: [] }, () => {
      setTimeout(() => {
        this.setState({ palettes: seedColors }, this.syncLocalStorage);
      }, FADE_TIME);
    });
  };

  render() {
    const { palettes, format } = this.state;
    const paletteNames = palettes.map(item => item.paletteName);

    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              timeout={FADE_TIME}
              key={location.key}
            >
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        paletteNames={paletteNames}
                        starterPalette={seedColors[0].colors}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        paletteList={palettes}
                        deletePalette={this.deletePalette}
                        resetPaletteList={this.resetPaletteList}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                        format={format}
                        changeFormat={this.changeFormat}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        paletteId={routeProps.match.params.paletteId}
                        colorId={routeProps.match.params.colorId}
                        format={format}
                        changeFormat={this.changeFormat}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default withStyles(fades)(App);
