import React from "react";
import { Link } from "react-router-dom";

const HomeLink = ({ image, link, text }) => {
  return (
    <div className='home-link'>
      <div className='image'>
        <img src={image} alt=''></img>
      </div>
      <div className='link'>
        <Link to={link}>{text}</Link>
      </div>
    </div>
  );
};

export default HomeLink;
