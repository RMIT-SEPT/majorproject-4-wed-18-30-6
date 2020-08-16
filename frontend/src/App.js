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
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register/admin' component={RegisterAdmin} />
            <Route exact path='/register/customer' component={RegisterCustomer} />
            <Route exact path='/register/employee' component={RegisterEmployee} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </AuthState>
    </Router>
  );
};

export default App;
