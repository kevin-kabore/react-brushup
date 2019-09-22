import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    const hasError = this.state;

    return hasError === true ? 
      <h1>Oops, there was an unexpected error...</h1> :
      this.props.children;
  }
}

export default ErrorBoundry;