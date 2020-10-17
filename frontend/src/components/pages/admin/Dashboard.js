import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/auth/authContext";

import DashboardLink from "../../layouts/DashboardLink";

const Dashboard = (props) => {
  const authContext = useContext(AuthContext);

  const { user, loading, isAuthenticated, loadUser } = authContext;

  const [dashboard, setDashboard] = useState({
    type: "",
    links: [],
  });

  const { type, links } = dashboard;

  useEffect(() => {
    if (loading) {
      if (!isAuthenticated) loadUser();
      return;
    }

    if (!isAuthenticated) {
      props.history.push("/");
      return;
    }

    switch (user.role) {
      case "admin":
        setDashboard((dashboard) => ({
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
              link: "/user/roster",
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
        }));
        break;
      case "employee":
        setDashboard((dashboard) => ({
          ...dashboard,
          type: "Employee",
          links: [
            {
              name: "My Details",
              image: "",
              link: "/user/details",
            },
            {
              name: "My Roster",
              image: "",
              link: "/user/roster",
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
        }));
        break;
      case "customer":
        setDashboard((dashboard) => ({
          ...dashboard,
          type: "Customer",
          links: [
            {
              name: "My Details",
              image: "",
              link: "/user/details",
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
        }));
        break;
      default:
        break;
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

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
