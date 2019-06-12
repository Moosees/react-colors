import React, { Component } from 'react';
import NotFound from './NotFound';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <NotFound /> : this.props.children;
  }
}
