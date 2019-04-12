import React, { Component } from "react";
import MyComponent from "./components/my-component";

class App extends React.Component {
  static navigationOptions() {
    return {
      path: "/",
      exact: true
    };
  }

  render() {
    return <MyComponent />;
  }
}

export default App;
