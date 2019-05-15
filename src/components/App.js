import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from '../helpers/seedColors';
import { generatePalette } from '../helpers/paletteHelpers';

class App extends Component {
  state = {
    format: 'hex'
  };

  changeFormat = format => {
    this.setState({ format });
  };

  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList paletteList={seedColors} {...routeProps} />
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
