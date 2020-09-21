import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";
import InputDropdownForm from "../../layouts/InputDropdownForm";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { error, clearErrors, loading, loadUser, isAuthenticated, registerEmployee } = authContext;

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

  const [user, setUser] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    skills: "",
    type: "",
  });

  const { name, address, mobile, email, skills, type } = user;

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
    if (skills === "") {
      alert("Please enter in the skills!");
      return;
    }
    if (type === "") {
      alert("Please enter in the type!");
      return;
    }

    registerEmployee({
      name,
      address,
      mobile,
      email,
      skills,
      type,
    });
  };

  var skill_options = [
    {
      id: "cleaning",
      name: "Cleaning",
    },
    {
      id: "sweeping",
      name: "Sweeping",
    },
  ];

  var type_options = [
    {
      id: "tier1",
      name: "Tier1",
    },
    {
      id: "tier2",
      name: "Tier2",
    },
  ];

  return (
    <div className='register'>
      <h2 className='transform'>
        <span className='big'>E</span>
        <span className='small'>mployee </span>
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
        <div>
          <InputDropdownForm
            style={{ display: "inline-block", width: "50%" }}
            name='skills'
            header='Skills'
            options={skill_options}
            onChange={onChange}
          />
          <InputDropdownForm
            style={{ display: "inline-block", width: "50%" }}
            name='type'
            header='Type'
            options={type_options}
            onChange={onChange}
          />
        </div>
        <InputForm
          name='availability'
          type='text'
          header='Availability'
          onChange={onChange}
        />
        <input className='register-btn' type='submit' value='Sign up' />
      </form>

      <h3 style={{ position: "relative", top: "90px" }}>
        Your request will be sent to an admin for approval
      </h3>
    </div>
  );
};

export default Register;
