import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "../../components/welcome";

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
