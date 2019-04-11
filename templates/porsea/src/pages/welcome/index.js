import React, { Component } from "react";
import Welcome from "../../components/welcome";

class App extends React.Component {
  static navigationOptions() {
    return {
      path: "/",
      exact: true
    };
  }

  render() {
    return <Welcome />;
  }
}

export default App;
