import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Support = () => {
  const [tickets, setTicket] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    const response = await axios.get(`http://localhost:4025/incidents/`);
    setTicket(response.data);
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:4025/incidents/${id}`);
      getTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section">
      <div className="column is-full">
        <Link to={`new`} className="button is-success">
          Create a new ticket
        </Link>
        <br></br> <br></br>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Site Id</th>
              <th>Line Id</th>
              <th>Description</th>
              <th>Status</th>
              <th>Owner</th>
               <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.site_id}>
                <td>{ticket + 1}</td>
                <td>{ticket.site_id}</td>
                <td>{ticket.line_id}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.owner}</td>

                <td>
                  <Link
                    to={`edit/${ticket.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit Ticket
                  </Link>

                  <Link to={`create`} className="button is-small is-info mr-2">
                    Raise an incident
                  </Link>

                  <button
                    onClick={() => deleteTicket(ticket.id)}
                    className="button is-small is-danger"
                  >
                    Remove Ticket
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

export default Support;

