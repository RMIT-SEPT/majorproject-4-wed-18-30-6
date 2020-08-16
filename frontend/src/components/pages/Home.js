import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import HomeLink from "../layouts/HomeLink";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='home'>
      <div className='main-image'>
        <div className='blurred' />
        <div className='normal' />
      </div>

      <div className='content'>
        <h2>
          <span className='big'>{"O"}</span>
          <span className='small'>{"ur "}</span>
          <span className='big'>{"S"}</span>
          <span className='small'>{"ervices,"} </span>
        </h2>
        <div className='home links'>
          <HomeLink
            image='images/dentist.jpg'
            text='Dentist Appointments'
            link='/'
          />
          <HomeLink image='images/cleaner.jpg' text='Gym' link='/' />
          <HomeLink
            image='images/hairdresser.jpg'
            text='Hairdresser'
            link='/'
          />
          <HomeLink image='images/cleaner.jpg' text='Cleaners' link='/' />
        </div>
      </div>
    </div>
  );
};

export default Home;
