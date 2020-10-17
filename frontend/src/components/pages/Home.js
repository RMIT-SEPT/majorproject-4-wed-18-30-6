import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import HomeLink from "../layouts/HomeLink";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { services, loadUser, getServices } = authContext;

  useEffect(() => {
    if (loading) {
      if (!isAuthenticated) loadUser();
      return;
	}
	
    getServices();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='home'>
      <div className='main-image'>
        <div className='blurred' />
        <div className='normal' />
      </div>

      <div className='content'>
        <h2 className='transform'>
          <span className='big'>{"O"}</span>
          <span className='small'>{"ur "}</span>
          <span className='big'>{"S"}</span>
          <span className='small'>{"ervices,"} </span>
        </h2>
        <div className='home links'>
          {services.map((service) => (
            <HomeLink
              key={service.name}
              text={service.name}
              image={service.image}
              link={`book?type=${service.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
