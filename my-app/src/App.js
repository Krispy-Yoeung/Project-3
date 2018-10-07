import React, { Component } from 'react';
import { Route } from  "react-router-dom";
import  HomePage  from "./components/pages/HomePage"
import  LoginPage  from "./components/pages/LoginPage"
import SignupPage from "./components/pages/SignupPage"
import DashboardPage from "./components/pages/DashboardPage"
import { Bootstrap, Grid, Row, Col } from "react-bootstrap";
      



class App extends Component{
  state = {

  }
  render(){
    return(
      <div>

     
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/dashboard" exact component={DashboardPage} />

        
      

      </div>
    )
  }
}



export default App;
