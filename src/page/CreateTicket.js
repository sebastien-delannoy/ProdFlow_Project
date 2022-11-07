import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateTicket = () => {
  const [site_id, setSiteId] = useState("");
  const [line_id, setLineId] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [owner, setOwner] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

 

  const saveTicket = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4025/incidents/`, {
        site_id,
        line_id,
        description,
        status,
        owner,
      });
      navigate("/lines/;id");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="section">
      <div className="column is-full">
        <form onSubmit={saveTicket}>
          <div className="field">
            <label className="label">Site Id</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={site_id}
                onChange={(e) => setSiteId(e.target.value)}
                placeholder="Site Id"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Line Id</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={line_id}
                onChange={(e) => setLineId(e.target.value)}
                placeholder="Line Id"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Owner</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Owner"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Stopped">Stopped</option>
                  <option value="OnHold">On Hold</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Submit Incident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
