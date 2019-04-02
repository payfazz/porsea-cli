import React, { Component } from "react";
import Welcome from "../../components/welcome";
import "./App.css";

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
