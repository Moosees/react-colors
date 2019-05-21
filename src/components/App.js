import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from '../helpers/seedColors';
import { generatePalette } from '../helpers/paletteHelpers';

class App extends Component {
  state = {
    palettes: [],
    format: 'hex'
  };

  componentDidMount() {
    const localPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    localPalettes
      ? this.setState({ palettes: localPalettes })
      : this.setState({ palettes: seedColors });
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

  render() {
    const paletteNames = this.state.palettes.map(item => item.paletteName);

    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              paletteNames={paletteNames}
              starterPalette={seedColors[0].colors}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList paletteList={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
              format={this.state.format}
              changeFormat={this.changeFormat}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              paletteId={routeProps.match.params.paletteId}
              colorId={routeProps.match.params.colorId}
              format={this.state.format}
              changeFormat={this.changeFormat}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
