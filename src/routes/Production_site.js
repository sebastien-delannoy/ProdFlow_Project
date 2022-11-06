import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export default function ProductionSite() {
  var [site, setSite] = useState([]);

  // using Axios
  useEffect(() => {
    axios.get(`http://localhost:3015/data`).then((data) => {
      console.log(data);
      setSite({
        siteName: data.data[0].s_name,
        siteAddress: data.data[0].adr,
        siteTown: data.data[0].town,
        siteZip: data.data[0].zip_code,
        siteCountry: data.data[0].country,
        sitePicture: data.data[0].site_picture,
      });
    });
  }, []);

  return (
    <div className="Post individual">
      <h1 className="post-title">{site.siteName}</h1>
      <p>{site.siteAddress}</p>
      <p>{site.siteTown}</p>
      <p>{site.siteZip}</p>
      <p>{site.siteCountry}</p>
    </div>
  );
}
