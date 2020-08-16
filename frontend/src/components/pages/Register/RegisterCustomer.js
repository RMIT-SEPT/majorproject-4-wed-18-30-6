import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { error, clearErrors, isAuthenticated, registerCustomer } = authContext;

  useEffect(() => {
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
  });

  const { name, address, mobile, email } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter in the name!");
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

    registerCustomer({
      name,
      address,
      mobile,
      email,
    });
  };

  return (
    <div className='register'>
      <h2 className='transform'>
        <span className='big'>C</span>
        <span className='small'>ustomer </span>
        <span className='big'>S</span>
        <span className='small'>ign </span>
        <span className='big'> U</span>
        <span className='small'>p</span>
      </h2>

      <h3>Please fill in the form</h3>

      <form onSubmit={onSubmit}>
        <InputForm name='name' type='text' header='Name' onChange={onChange} />
        <InputForm
          name='address'
          type='text'
          header='Address'
          onChange={onChange}
        />
        <InputForm
          name='mobile'
          type='phone'
          header='Mobile'
          onChange={onChange}
        />
        <InputForm
          name='email'
          type='email'
          header='Email'
          onChange={onChange}
        />
        <input className='register-btn' type='submit' value='Sign up' />
      </form>
    </div>
  );
};

export default Register;
