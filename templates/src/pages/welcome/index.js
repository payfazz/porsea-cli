import React, { Component } from "react";
import Welcome from "Components/welcome";
import "./welcome.scss";

class App extends Component {
  static navigationOptions() {
    return {
      initialRoute: false,
      alias: "/welcome"
    };
  }

  render() {
    <Welcome />;
  }
}

module.exports = App;
