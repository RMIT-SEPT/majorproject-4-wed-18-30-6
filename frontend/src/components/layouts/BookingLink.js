import React from "react";

const BookingLink = ({ children, booking }) => {
  return (
    <div className='booking'>
      <img src={booking.service.image} alt=''></img>
      <div className='data'>
        <ul className='booking-data-left'>
          <li>Due: {booking.due} </li>
          <li>Worker: {booking.worker}</li>
          <li>Time: {booking.time}</li>
          <li>Amount: ${booking.price}</li>
        </ul>
        <ul className='booking-data-right'>{children}</ul>
      </div>
    </div>
  );
};

export default BookingLink;
