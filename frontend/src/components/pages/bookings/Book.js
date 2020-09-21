import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";
import InputDropdownForm from "../../layouts/InputDropdownForm";

const Book = (props) => {
  const authContext = useContext(AuthContext);

  const { error, clearErrors, isAuthenticated, createBooking } = authContext;

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

  const [booking, setBooking] = useState({
    type: "",
    date: "",
    time: "",
    worker: "",
  });

  const { type, date, time, worker } = booking;

  const onChange = (e) =>
    setBooking({ ...booking, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (type === "") {
      alert("Please enter in the type!");
      return;
    }
    if (date === "") {
      alert("Please enter in the date!");
      return;
    }
    if (time === "") {
      alert("Please enter in the time!");
      return;
    }
    if (worker === "") {
      alert("Please enter in the worker!");
      return;
    }

    createBooking(type, date, time, worker);
  };

  return (
    <div className='book'>
      <h2 className='transform'>
        <span className='big'>B</span>
        <span className='small'>ook </span>
        <span className='big'>A</span>
        <span className='small'>n </span>
        <span className='big'>A</span>
        <span className='small'>ppointment</span>
      </h2>

      <h3>Please fill in the form to confirm your booking</h3>

      <form onSubmit={onSubmit}>
        <InputForm
          name='type'
          type='text'
          header='Booking Type'
          onChange={onChange}
        />
        <InputForm
          name='date'
          type='text'
          header='Booking Date'
          onChange={onChange}
        />
        <InputForm
          name='time'
          type='text'
          header='Booking Time'
          onChange={onChange}
        />
        <InputForm
          name='worker'
          type='text'
          header='Worker'
          onChange={onChange}
        />
        <input className='book-btn' type='submit' value='Done' />
      </form>
    </div>
  );
};

export default Book;
