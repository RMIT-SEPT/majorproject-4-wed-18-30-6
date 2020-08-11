import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import RegisterAdmin from "./components/pages/Register/RegisterAdmin";
import RegisterCustomer from "./components/pages/Register/RegisterCustomer";
import RegisterEmployee from "./components/pages/Register/RegisterEmployee";
import Dashboard from "./components/pages/Admin/Dashboard";

const App = () => {
  return (
    <Router>
      <div className='App'>
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
    </Router>
  );
};

export default App;
