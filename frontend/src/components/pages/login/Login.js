import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";
import { Link } from "react-router-dom";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { error, clearErrors, loading, loadUser, isAuthenticated, login } = authContext;

  useEffect(() => {
    if (loading) {
      if (!isAuthenticated) loadUser();
      return;
    }
	
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error !== "" && error !== undefined && error !== null) {
      alert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    skills: "",
    type: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Please enter in the email!");
      return;
    }
    if (password === "") {
      alert("Please enter in the password!");
      return;
    }

    login({
      email,
      password,
    });
  };

  return (
    <div className='login'>
      <h2 className='transform'>
        <span className='big'>L</span>
        <span className='small'>ogin</span>
      </h2>

      <h3>Continue to the dashboard</h3>

      <form onSubmit={onSubmit}>
        <InputForm
          name='email'
          type='email'
          header='Email'
          onChange={onChange}
        />
        <InputForm
          name='password'
          type='password'
          header='Password'
          onChange={onChange}
        />
        <Link className='right' to='/'>
          Forgot?
        </Link>
        <div className='bottom-buttons'>
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
