import React from "react";
import { Link } from "react-router-dom";

const HomeLink = ({ image, link, text }) => {
  return (
    <Link to={link} className='home-link'>
      <div className='image'>
        <img src={image} alt=''></img>
      </div>
      <div className='link'>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default HomeLink;
