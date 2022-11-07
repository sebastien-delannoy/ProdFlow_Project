import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const AddLine = () => {
  const [site_id, setSiteId] = useState("");
  const [details, setDetails] = useState("");
  const [line_number, setLineNumber] = useState("");
  const [production_rate, setProdRate] = useState("");
  const [status, setStatus] = useState("Active");
  const [incident_rate, setIncident] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const saveLine = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4025/lines", {
        site_id,
        details,
        line_number,
        production_rate,
        status,
        incident_rate,
      });
      navigate("/lines/;id");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section">
      <div className="column is-full">
        <br></br>
        <p>Start New Production Line</p>
        <br></br>
        <form onSubmit={saveLine}>
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
            <label className="label">Details</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Line Number</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={line_number}
                onChange={(e) => setLineNumber(e.target.value)}
                placeholder="Line Number"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Production Rate</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={production_rate}
                onChange={(e) => setProdRate(e.target.value)}
                placeholder="Production Rate"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Incident #</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={incident_rate}
                onChange={(e) => setIncident(e.target.value)}
                placeholder="Incident #"
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
                  <option value="OnHold">OnHold</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Deploy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLine;
