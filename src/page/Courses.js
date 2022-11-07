import React from "react";
import { Link, Outlet } from "react-router-dom";
import SiteList from "../component/SiteList";


const Courses = () => {
  return (
    <div className="Page">
      <SiteList />
      
      <Outlet />
    </div>
  );
};

export default Courses;
