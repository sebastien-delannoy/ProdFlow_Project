import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Record = (props) => (
  <tr>
    <td>{props.record.s_name}</td>
    <td>{props.record.adr}</td>
    <td>{props.record.Town}</td>
    <td>{props.record.zip_code}</td>
    <td>{props.record.country}</td>
    <td>{props.record.id}</td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3015/data/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} />;
    });
  }

  // This following section will display the table with the records of individuals.

  return (
    <div>
      <h2>Our production centers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">Site name</th>
            <th scope="col">Address</th>
            <th scope="col">Town</th>
            <th scope="col">Zip Code</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </Table>
      
    </div>
  );
}
