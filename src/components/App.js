import React, { useState, useMemo, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FADE_TIME } from '../constants';
import { generatePalette } from '../helpers/paletteHelpers';
import seedColors from '../helpers/seedColors';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

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

const App = () => {
  const localPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [format, setFormat] = useState('hex');
  const [palettes, setPalettes] = useState(localPalettes || seedColors);

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const paletteNames = useMemo(() => palettes.map(item => item.paletteName), [
    palettes
  ]);

  const changeFormat = format => {
    setFormat(format);
  };

  const findPalette = id => palettes.find(palette => palette.id === id);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = paletteId => {
    setPalettes(palettes.filter(palette => palette.id !== paletteId));
  };

  const resetPaletteList = () => {
    setPalettes(seedColors);
  };

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
                      savePalette={savePalette}
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
                      deletePalette={deletePalette}
                      resetPaletteList={resetPaletteList}
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
                        findPalette(routeProps.match.params.id)
                      )}
                      format={format}
                      changeFormat={changeFormat}
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
                        findPalette(routeProps.match.params.paletteId)
                      )}
                      paletteId={routeProps.match.params.paletteId}
                      colorId={routeProps.match.params.colorId}
                      format={format}
                      changeFormat={changeFormat}
                    />
                  </Page>
                )}
              />
              <Route
                render={routeProps => (
                  <Page>
                    <PaletteList
                      paletteList={palettes}
                      deletePalette={deletePalette}
                      resetPaletteList={resetPaletteList}
                      {...routeProps}
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
};

export default withStyles(fades)(App);
