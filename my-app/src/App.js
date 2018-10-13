import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import NavBar from "./components/Navbar";

class App extends Component {
  state = {
    data:null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  render() {
    return (
       
      <div>
        {/* importing the NavBar for all pages */}
        <NavBar />

        <p>{this.state.data}</p>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        </Switch>
        

         
      </div>

      
     
    );
  }
}

export default App;
