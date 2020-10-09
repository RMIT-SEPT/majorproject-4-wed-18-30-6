import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";
import RosterItem from "../../layouts/RosterItem";

const Book = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    clearErrors,
    loading,
    isAuthenticated,
    loadUser,
    appointments,
    loadAppointments,
  } = authContext;

  useEffect(() => {
    loadUser();

    if (loading) {
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

    if (appointments === []) {
      loadAppointments();
    }

    // eslint-disable-next-line
  }, [error, props.history]);

  return (
    <div className='roster'>
      <h2 className='transform'>
        <span className='big'>M</span>
        <span className='small'>y </span>
        <span className='big'>R</span>
        <span className='small'>oster </span>
      </h2>

      <h3>You have been assigned the following appointments for the week</h3>

      <div className='content'>
        {appointments.map((appointment) => (
          <RosterItem key={appointment.date} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default Book;
