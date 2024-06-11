import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `http://localhost:3000/user/get/all/user`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []);

  // Check data for debugging
  console.log("Data:", data);

  return (
    <div className="container">
      <div className="table">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>MOBILE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
