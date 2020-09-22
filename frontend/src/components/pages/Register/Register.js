import React, { useContext, useEffect } from "react";

import AuthContext from "../../../context/auth/authContext";
import RegisterLink from "../../layouts/RegisterLink";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    clearErrors,
    loading,
    loadUser,
    isAuthenticated,
  } = authContext;

  useEffect(() => {
    loadUser();

    if (loading) {
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

  return (
    <div className='register'>
      <h2 className='transform'>
        <span className='big'>S</span>
        <span className='small'>ign </span>
        <span className='big'> U</span>
        <span className='small'>p</span>
      </h2>

      <h3>Please click one from the following options</h3>

      <div className='register links'>
        <RegisterLink
          image='images/dentist.jpg'
          text='Customer'
          link='/register/customer'
        />
        <RegisterLink
          image='images/hairdresser.jpg'
          text='Employee'
          link='/register/employee'
        />
        <RegisterLink
          image='images/hairdresser.jpg'
          text='Admin'
          link='/register/admin'
        />
      </div>
    </div>
  );
};

export default Register;
