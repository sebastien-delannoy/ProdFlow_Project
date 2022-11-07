import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const LineList = () => {
  const [lines, setLine] = useState([]);

  useEffect(() => {
    getLines();
  }, []);

  const getLines = async () => {
    const response = await axios.get(`http://localhost:4025/lines/`);
    setLine(response.data);
  };

  const deleteLine = async (id) => {
    try {
      await axios.delete(`http://localhost:4025/lines/${id}`);
      getLines();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section">
      <div className="column is-full">
        <Link to={`new`} className="button is-success">
          Implement a new line
        </Link>
        <br></br> <br></br>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Site Id</th>
              <th>Details</th>
              <th>Production Rate</th>
              <th>Status</th>
              <th>Incident</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line, index) => (
              <tr key={line.site_id}>
                <td>{index + 1}</td>
                <td>{line.site_id}</td>
                <td>{line.details}</td>
                <td>{line.production_rate}</td>
                <td>{line.status}</td>
                <td>{line.incident_rate}</td>

                <td>
                  <Link
                    to={`edit/${line.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit Line
                  </Link>

                  <Link to={`create`} className="button is-small is-info mr-2">
                    Raise an incident
                  </Link>

                  <button
                    onClick={() => deleteLine(line.id)}
                    className="button is-small is-danger"
                  >
                    Free Line
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LineList;
