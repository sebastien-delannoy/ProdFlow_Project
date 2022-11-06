import React from "react";
import { Link, Outlet } from "react-router-dom";
import SiteList from "./SiteList";

const Sites = () => {
  return (
    <div className="Page">
      <SiteList />
      {/* <div className="courses-nav">
        <Link to="/sites/add">Register new site</Link>
        <Link to="/sites/edit">Edit site details</Link>
      </div> */}

      <Outlet />
    </div>
  );
};

export default Sites;
