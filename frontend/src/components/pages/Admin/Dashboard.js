import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";

import DashboardLink from "../../layouts/DashboardLink";

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    if (!authContext.isAuthenticated) {
      props.history.push("/");
      return;
    }

    switch (authContext.user.type) {
      case "admin":
        setDashboard({
          ...dashboard,
          type: "Admin",
          links: [
            {
              name: "Employee Register",
              image: "",
              link: "/",
            },
            {
              name: "Roster",
              image: "",
              link: "/",
            },
            {
              name: "Today's Schedule",
              image: "",
              link: "/",
            },
            {
              name: "All Bookings",
              image: "",
              link: "/",
            },
            {
              name: "Employee Requests",
              image: "",
              link: "/",
            },
            {
              name: "Customer Feedback",
              image: "",
              link: "/",
            },
            {
              name: "Rewards",
              image: "",
              link: "/",
            },
          ],
        });
        break;
      case "employee":
        setDashboard({
          ...dashboard,
          type: "Employee",
          links: [
            {
              name: "My Details",
              image: "",
              link: "/",
            },
            {
              name: "My Roster",
              image: "",
              link: "/",
            },
            {
              name: "Today's Schedule",
              image: "",
              link: "/",
            },
            {
              name: "Rewards",
              image: "",
              link: "/",
            },
            {
              name: "My Availabilities",
              image: "",
              link: "/",
            },
            {
              name: "Customer Feedback",
              image: "",
              link: "/",
            },
          ],
        });
        break;
      case "customer":
        setDashboard({
          ...dashboard,
          type: "Customer",
          links: [
            {
              name: "My Details",
              image: "",
              link: "/",
            },
            {
              name: "My Bookings",
              image: "",
              link: "/",
            },
            {
              name: "Upcoming Bookings",
              image: "",
              link: "/",
            },
            {
              name: "Rewards",
              image: "",
              link: "/",
            },
            {
              name: "My Credit",
              image: "",
              link: "/",
            },
            {
              name: "My Feedback",
              image: "",
              link: "/",
            },
          ],
        });
        break;
      default:
        break;
    }

    // eslint-disable-next-line
  }, [authContext.isAuthenticated]);

  const [dashboard, setDashboard] = useState({
    type: "",
    links: [],
  });

  const { type, links } = dashboard;

  return (
    <div className='dashboard'>
      <div className='main-image'>
        <div className='blurred' />
        <div className='normal' />
      </div>

      <div className='content'>
        <h2>Welcome {type}</h2>
        <div className='dashboard links'>
          {links.map((link) => (
            <DashboardLink
              key={link.name}
              text={link.name}
              image={link.image}
              link={link.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
