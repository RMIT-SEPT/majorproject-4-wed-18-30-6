import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layouts/Navbar";

import Home from "./components/pages/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import RegisterAdmin from "./components/pages/register/RegisterAdmin";
import RegisterCustomer from "./components/pages/register/RegisterCustomer";
import RegisterEmployee from "./components/pages/register/RegisterEmployee";
import Dashboard from "./components/pages/admin/Dashboard";

import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <Router>
      <AuthState>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/register/admin'>
              <RegisterAdmin />
            </Route>
            <Route path='/register/customer'>
              <RegisterCustomer />
            </Route>
            <Route path='/register/employee'>
              <RegisterEmployee />
            </Route>
            <Route path='/admin/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </AuthState>
    </Router>
  );
};

export default App;
