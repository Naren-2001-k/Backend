import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setName] = useState("");

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
  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3000/user/delete/${userName}`);
  //     setData(data.filter((data) => data.name !== userName));
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  //   return alert("Data deleted successfully");
  // };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDelete = async () => {
    try {
      // Find the user by name
      const userToDelete = data.find((user) => user.name === userName);
      if (!userToDelete) {
        throw new Error(`User with name "${userName}" not found.`);
      }

      // Send a DELETE request to the backend to delete the user
      await axios.delete(
        `http://localhost:3000/user/delete/${userToDelete._id}`
      );

      // Remove the user from the local state
      setData(data.filter((user) => user.name !== userName));

      // Reset the input field
      setName("");

      // Show a success message
      alert("Data deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error.message);
      // Show an error message
      alert("Error deleting user: " + error.message);
    }
  };

  // Check data for debugging
  console.log("Data:", data);

  return (
    <div className="container">
      <div className="edit">
        <input type="text" onChange={handleNameChange} />
        <button className="add">Add</button>
        <button className="delete" onClick={() => handleDelete()}>
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
                {/* <th>UserID</th> */}
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  {/* <td>{user._id}</td> */}
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
