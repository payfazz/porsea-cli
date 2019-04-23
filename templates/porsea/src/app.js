import React, { PureComponent, Fragment } from "react";

class App extends PureComponent {
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default App;
