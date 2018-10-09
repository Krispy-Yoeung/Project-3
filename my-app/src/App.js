import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import NavBar from "./components/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      //  <Router>
      <div>
        {/* importing the NavBar for all pages */}
        <NavBar />
        {/* <Switch> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        {/* </Switch> */}
      </div>
      // </Router>
    );
  }
}

export default App;
