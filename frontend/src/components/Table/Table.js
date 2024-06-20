import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userMobile, setMobile] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const url = `http://localhost:3000/user/get/all/user`;

    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAdd = async () => {
    if (!userName || !userAge || !userEmail || !userMobile) {
      alert("Please fill out all fields.");
      return;
    }
    const newUser = {
      name: userName,
      age: userAge,
      email: userEmail,
      mobile: userMobile,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/user/register`,
        newUser
      );

      setData([...data, response.data]); // Update local state with the new user
      setName(""); // Reset input fields after successful addition
      setAge("");
      setEmail("");
      setMobile("");

      alert("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error.message);
      alert("Error adding user: " + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const userToDelete = data.find((user) => user.name === userName);
      if (!userToDelete) {
        throw new Error(`User with name "${userName}" not found.`);
      }

      await axios.delete(
        `http://localhost:3000/user/delete/${userToDelete._id}`
      );

      setData(data.filter((user) => user.name !== userName));

      setName("");
      setAge("");
      setEmail("");
      setMobile("");

      alert("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error.message);
      alert("Error deleting user: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="edit">
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Age"
          value={userAge}
          onChange={handleAgeChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={userMobile}
          onChange={handleMobileChange}
        />
        <button className="add" onClick={handleAdd}>
          Add
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
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
                <th>MOBILE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
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
