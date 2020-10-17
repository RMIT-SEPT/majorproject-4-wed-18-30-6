import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    clearErrors,
    loading,
    loadUser,
    isAuthenticated,
    registerAdmin,
  } = authContext;

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
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    address: "",
    mobile: "",
    email: "",
  });

  const {
    first_name,
    last_name,
    username,
    password,
    address,
    mobile,
    email,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (first_name === "") {
      alert("Please enter in the first name!");
      return;
    }
    if (last_name === "") {
      alert("Please enter in the last name!");
      return;
    }
    if (username === "") {
      alert("Please enter in the username!");
      return;
    }
    if (password === "") {
      alert("Please enter in the password!");
      return;
    }
    if (address === "") {
      alert("Please enter in the address!");
      return;
    }
    if (mobile === "") {
      alert("Please enter in the mobile!");
      return;
    }
    if (email === "") {
      alert("Please enter in the email!");
      return;
    }

    registerAdmin({
      first_name,
      last_name,
	  username,
	  password,
      //address,
      //mobile,
      email,
    });
  };

  return (
    <div className='register'>
      <h2 className='transform'>
        <span className='big'>A</span>
        <span className='small'>dmin </span>
        <span className='big'>S</span>
        <span className='small'>ign </span>
        <span className='big'> U</span>
        <span className='small'>p</span>
      </h2>

      <h3>Please fill in the form</h3>

      <form onSubmit={onSubmit}>
        <div>
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='first_name'
            type='text'
            header='First Name'
            onChange={onChange}
          />
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='last_name'
            type='text'
            header='Last Name'
            onChange={onChange}
          />
        </div>
        <div>
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='username'
            type='text'
            header='Username'
            onChange={onChange}
          />
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='password'
            type='password'
            header='Password'
            onChange={onChange}
          />
        </div>
        <InputForm
          name='address'
          type='text'
          header='Address'
          onChange={onChange}
        />
        <div>
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='mobile'
            type='phone'
            header='Mobile'
            onChange={onChange}
          />
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='email'
            type='email'
            header='Email'
            onChange={onChange}
          />
        </div>
        <input className='register-btn' type='submit' value='Sign up' />
      </form>

      <h3 style={{ position: "relative", top: "90px" }}>
        Your request will be sent to the management for approval
      </h3>
    </div>
  );
};

export default Register;
