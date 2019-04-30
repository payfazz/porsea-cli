import React, { Component } from "react";
import MyComponent from "./components/my-component";

class WelcomePage extends React.Component {
  static navigationOptions() {
    return {
      path: "/",
      exact: true
    };
  }

  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

export default WelcomePage;
