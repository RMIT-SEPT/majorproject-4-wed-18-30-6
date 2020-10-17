import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";

const Details = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    clearErrors,
    loading,
    isAuthenticated,
    loadUser,
    updateUserDetails,
  } = authContext;

  useEffect(() => {
    if (loading) {
      if (!isAuthenticated) loadUser();
      return;
    }

    if (!isAuthenticated) {
      props.history.push("/");
      return;
    }

    if (error !== "" && error !== undefined && error !== null) {
      alert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    number: "",
    birth: "",
    address: "",
    gender: "",
    email: "",
  });

  const {
    first_name,
    last_name,
    number,
    birth,
    address,
    gender,
    email,
  } = details;

  const onChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

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
    if (number === "") {
      alert("Please enter in the number!");
      return;
    }
    if (birth === "") {
      alert("Please enter in the birth!");
      return;
    }
    if (address === "") {
      alert("Please enter in the address!");
      return;
    }
    if (gender === "") {
      alert("Please enter in the gender!");
      return;
    }
    if (email === "") {
      alert("Please enter in the email!");
      return;
    }

    updateUserDetails(
      first_name,
      last_name,
      number,
      birth,
      address,
      gender,
      email
    );
  };

  return (
    <div className='user-details'>
      <h2 className='transform'>
        <span className='big'>M</span>
        <span className='small'>y </span>
        <span className='big'>D</span>
        <span className='small'>etails </span>
      </h2>

      <h3>Please add/edit your details correctly</h3>

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
            name='number'
            type='text'
            header='Number'
            onChange={onChange}
          />
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='birth'
            type='text'
            header='Date Of Birth'
            onChange={onChange}
          />
        </div>
        <div>
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='address'
            type='text'
            header='Address'
            onChange={onChange}
          />
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='gender'
            type='text'
            header='Gender'
            onChange={onChange}
          />
        </div>
        <div>
          <InputForm
            style={{ display: "inline-block", width: "50%" }}
            name='email'
            type='email'
            header='Email'
            onChange={onChange}
          />
        </div>
        <input className='done-btn' type='submit' value='Done' />
      </form>
    </div>
  );
};

export default Details;
