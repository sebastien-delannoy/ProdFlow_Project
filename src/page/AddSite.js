import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const AddSite = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("France");

  const navigate = useNavigate();
  const params = useParams();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4025/sites", {
        name,
        description,
        address,
        town,
        zipcode,
        country,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Page">
      <div className="column is-full">
        <br></br>
        <p>Enter New Site Information</p>
        <br></br>
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Site Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
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
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Town</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                placeholder="Town"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Zip Code</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Belgium">Belgium</option>
                  <option value="UK">UK</option>
                  <option value="Finland">Finland</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSite;
