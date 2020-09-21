import React, { useContext, useEffect } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";
import { Link } from "react-router-dom";

const Login = () => {
  const authContext = useContext(AuthContext);
  
  authContext.loadUser();

  useEffect(() => {

    // check here if we are logged in already, transfer to home page if so

    // eslint-disable-next-line
  }, []);

  return (
    <div className='login'>
      <h2 className='transform'>
        <span className='big'>L</span>
        <span className='small'>ogin</span>
      </h2>

      <h3>Continue to the dashboard</h3>

      <form>
        <InputForm name='email' type='email' header='Email' />
        <InputForm name='password' type='password' header='Password' />
        <Link className='right' to='/'>
          Forgot?
        </Link>
        <h4>Not your computer? Use private browsing to login</h4>
        <div className="bottom-buttons">
          <Link className='left' to='/register'>
            Create Account
          </Link>
          <input className='right' type='submit' value='Login' />
        </div>
      </form>
    </div>
  );
};

export default Login;
