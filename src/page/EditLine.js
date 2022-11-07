import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLine= () => {
 

  const [site_id, setSiteId] = useState("");
  const [details, setDetails] = useState("");
  const [line_number, setLineNumber] = useState("");
  const [production_rate, setProdRate] = useState("");
  const [status, setStatus] = useState("");
  const [incident_rate, setIncident] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getLineById();
  }, []);

  const updateLine = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4025/lines/${id}`, {
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

  const getLineById = async () => {
    const response = await axios.get(`http://localhost:4025/lines/${id}`);
    setSiteId(response.data.site_id);
    setDetails(response.data.detail);
    setLineNumber(response.data.line_number);
    setProdRate(response.data.production_rate);
    setStatus(response.data.status);
    setIncident(response.data.incident_rate);
  };

  return (
    <div className="section">
      <div className="column is-full">
        <form onSubmit={updateLine}>
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
              Adjust Line Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLine;
