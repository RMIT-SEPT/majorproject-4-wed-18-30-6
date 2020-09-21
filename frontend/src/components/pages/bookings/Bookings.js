import React, { useContext, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";

import BookingLink from "../../layouts/BookingLink";

const Bookings = (props) => {
  const authContext = useContext(AuthContext);

  var { upcoming_bookings, past_bookings } = authContext;

  /* THESE ARE HARD CODED VALUES, REMOVE ONCE BACKEND IS LINKED */
  upcoming_bookings = [
    {
      id: "2",
      worker: "",
      service: {
        id: "1",
        name: "Cleaner",
        image: "images/cleaner.jpg",
      },
      due: "2020-09-18",
      booker: "",
      time: "2020-09-18",
      price: 10.0,
    },
  ];

  past_bookings = [
    {
      id: "1",
      worker: "",
      service: {
        id: "1",
        name: "Cleaner",
        image: "images/cleaner.jpg",
      },
      due: "2020-09-18",
      booker: "",
      time: "2020-09-18",
      price: 10.0,
    },
  ];

  var onRescheduleBooking = id => {
	console.log("onRescheduleBooking " + id);
  };

  var onCancelBooking = id => {
	console.log("onCancelBooking " + id);
  };

  var onViewBooking = id => {
	console.log("onViewBooking " + id);
  };

  return (
    <div className='bookings'>
      <h2 className='transform'>
        <span className='big'>M</span>
        <span className='small'>y </span>
        <span className='big'> B</span>
        <span className='small'>ookings</span>
      </h2>
      <div className='content'>
        <h2 className='transform'>
          <span className='big'>U</span>
          <span className='small'>pcoming </span>
          <span className='big'> B</span>
          <span className='small'>ookings</span>
        </h2>
        <div className='upcoming'>
          {upcoming_bookings.map((booking) => (
            <BookingLink booking={booking} key={booking.id}>
              <Fragment>
                <li className='border'>
                  <button onClick={() => onRescheduleBooking(booking.id)}>Reschedule</button>
                </li>
                <li className='border'>
                  <button onClick={() => onCancelBooking(booking.id)}>Cancel</button>
                </li>
              </Fragment>
            </BookingLink>
          ))}
        </div>
        <h2 className='transform'>
          <span className='big'>P</span>
          <span className='small'>ast </span>
          <span className='big'> B</span>
          <span className='small'>ookings</span>
        </h2>
        <div className='past'>
          {past_bookings.map((booking) => (
            <BookingLink booking={booking} key={booking.id}>
              <Fragment>
                <li className='border'>
                  <button onClick={() => onViewBooking(booking.id)}>View</button>
                </li>
              </Fragment>
            </BookingLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
