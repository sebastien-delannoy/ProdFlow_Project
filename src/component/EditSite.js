import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSite = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("France");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSiteById();
  }, []);

  const updateSite = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4025/sites/${id}`, {
        name,
        description,
        address,
        town,
        zipcode,
        country,
      });
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  const getSiteById = async () => {
    const response = await axios.get(`http://localhost:4025/sites/${id}`);
    setName(response.data.name);
    setDescription(response.data.description);
    setAddress(response.data.address);
    setTown(response.data.town);
    setZipcode(response.data.zipcode);
    setCountry(response.data.country);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-full">
        <form onSubmit={updateSite}>
          <div className="field">
            <label className="label">Name</label>
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSite;
