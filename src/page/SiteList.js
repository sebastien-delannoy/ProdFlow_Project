import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
// import Table from "react-bootstrap/Table";


const SiteList = () => {
  const [sites, setSite] = useState([]);

  useEffect(() => {
    getSites();
  }, []);

  const getSites = async () => {
    const response = await axios.get("http://localhost:4025/sites");
    setSite(response.data);
  };

  const deleteSite = async (id) => {
    try {
      await axios.delete(`http://localhost:4025/sites/${id}`);
      getSites();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Page">
    <div className="columns is-centered">
      <div className="column is-full">
        {/* <Link to={`/sites/search`} className="button is-success"> */}
        <Link to="/courses/search" className="button is-success">
          Register New Site
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Town</th>
              <th>Zip Code</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site, index) => (
              <tr key={site.id}>
                <td>{index + 1}</td>
                <td>{site.name}</td>
                <td>{site.description}</td>
                <td>{site.address}</td>
                <td>{site.town}</td>
                <td>{site.zipcode}</td>
                <td>{site.country}</td>
                <td>
                  <Link
                    to={`edit/${site.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteSite(site.id)}
                    className="button is-small is-danger"
                  >
                    Untrack Site
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
    </div>
  );
};

export default SiteList;