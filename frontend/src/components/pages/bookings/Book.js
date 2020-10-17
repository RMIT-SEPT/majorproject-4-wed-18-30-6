import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import InputForm from "../../layouts/InputForm";

const Book = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    clearErrors,
    loading,
    isAuthenticated,
    loadUser,
    createBooking,
    availiableTimes,
    availiableWorkerTimes,
    loadAvaliableTimes,
    loadAvaliableWorkerTimes,
  } = authContext;

  useEffect(() => {
    if (loading) {
      if (!isAuthenticated) loadUser();
      return;
    }

    if (!isAuthenticated) {
      props.history.push("/login");
      return;
    }

    if (error !== "" && error !== undefined && error !== null) {
      alert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, props.history]);

  const [booking, setBooking] = useState({
    service: "",
    date: new Date(),
    time: new Date(),
    worker: "",
  });

  const { service, date, time, worker } = booking;

  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });

    loadAvaliableTimes(booking.service);
    loadAvaliableWorkerTimes(booking.service, booking.worker);
  };

  const onDateChange = (date) => setBooking({ ...booking, date: date });
  const onTimeChange = (date) => setBooking({ ...booking, time: time });

  const onSubmit = (e) => {
    e.preventDefault();

    if (service === "") {
      alert("Please enter in the service!");
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

    createBooking(service, date, time, worker);
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
          name='service'
          type='text'
          header='Booking Service'
          onChange={onChange}
        />
        <InputForm
          name='date'
          type='date'
          header='Booking Date'
          onChange={onDateChange}
          def={date}
        />
        <InputForm
          name='time'
          type='date'
          header='Booking Time'
          onChange={onTimeChange}
          def={time}
        />
        <InputForm
          name='worker'
          type='text'
          header='Worker'
          onChange={onChange}
        />
        <input className='book-btn' type='submit' value='Done' />
      </form>
      <div className='times-container'>
        <div className='service-times-container'>
          <h3>Avaliable Times</h3>
          <ul>
            {availiableTimes.map((time) => (
              <li>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='worker-times-container'>
          <h3>Avaliable Worker Times</h3>
          <ul>
            {availiableWorkerTimes.map((time) => (
              <li>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Book;
