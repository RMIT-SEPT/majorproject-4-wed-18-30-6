import React from "react";
import RegisterLink from "../../layouts/RegisterLink";

const Register = () => {
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
