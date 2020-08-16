import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = ({ image, link, text }) => {
  return (
    <Link to={link} className='dashboard-link'>
      <div className='image'>
        <img src={image} alt=''></img>
      </div>
      <div className='link'>
        <span >{text}</span>
      </div>
    </Link>
  );
};

export default DashboardLink;
