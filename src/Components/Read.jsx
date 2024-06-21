import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://66712b38e083e62ee43a5e4f.mockapi.io/crudd")
      .then((response) => {
        setdata(response.data);
      });
  }, []);
  return (
    <>
      <div>
        <Table striped bordered hover>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zip}</td>
              <td>{item.country}</td>
              <td>
                {" "}
                <Link to={`/update/${item.id}`} className="btn btn-primary">
                  Edit{"     "}
                </Link>
                <Link to="/delete" className="btn btn-danger ms-2">
                  Delete {""}{" "}
                </Link>
              </td>
            </tr>
          ))}
          <thead></thead>
          <tbody>
            <tr></tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Read;
