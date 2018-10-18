import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Auth from '../modules/Auth.js'

import PrivateRoute from '../Pages/PrivateRoute.jsx';
import PublicRoute from '../Pages/PublicRoute.jsx';

import HomePage from './HomePage.jsx';
import LoginPage from '../Pages/LoginPage.jsx';
import SignUpPage from '../Pages/SignUpPage.jsx';
import Dashboard from '../Pages/DashboardPage.jsx';

const Base = () => (
  <div>
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
      <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="navbar-brand" href="/">Project 3</a>
      </li>
      <li className="nav-item">
      <Link to="/">Home</Link>
      </li>
      {Auth.isUserAuthenticated() ?(
      <li className="nav-item">
      <Link to="/logout">Log out</Link>
      </li>
      ) : <div>
      <li className="nav-item">
      <Link to="/login">Log in</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup">Sign up</Link>
      </li>
      </div>
      }
      </ul>
  </nav> */}

  <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12 header">
    My Super Hero List
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ml-auto">
         <li>
         <Link className="nav-link" to="/">Home</Link>
         </li>
           {Auth.isUserAuthenticated() ?(
             
           <li className="nav-item nav-buttons">
             <Link className="nav-link" to="/dashboard">DashBoard</Link>

             <Link className="nav-link" to="/logout">Logout</Link>
           </li>
           ): 
           <div>
           <li className="nav-item nav-buttons">
           <Link className="nav-link" to="/login">Log in</Link>
           </li>
           <li className="nav-item nav-buttons">
             <Link className="nav-link" to="/signup">Sign up</Link>
           </li>
           </div>
           }
         </ul>
       </div>
  </nav>

  <Switch>
        <PublicRoute exact path='/login' component={LoginPage} authenticated={Auth.isUserAuthenticated()} />
        <PublicRoute exact path='/signup' component={SignUpPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/logout'
          component={() => {
            Auth.deauthenticateUser();
            return (
              <Redirect to="/" replace />
            );
          }}
          authenticated={Auth.isUserAuthenticated()}
        />
        <Route exact path='/' component={HomePage} />
      

      </Switch>

  
  
    {/* <div className="navbar static-top">
    <ul className="navbar-nav">
      <li className="navbar-brand">
        <Link to="/">React App</Link>
      </li>
      {Auth.isUserAuthenticated() ? (
        <li className="nav-item">
          <Link to="/logout">Log out</Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </li>
      )}

      </ul>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} authenticated={Auth.isUserAuthenticated()} />
        <PublicRoute exact path='/signup' component={SignUpPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/logout'
          component={() => {
            Auth.deauthenticateUser();
            return (
              <Redirect to="/" replace />
            );
          }}
          authenticated={Auth.isUserAuthenticated()}
        />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div> */}
  </div>
);

export default Base;
