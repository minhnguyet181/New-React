import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const API_URL = 'http://localhost:1004'; // Backend API URL

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (id, updatedUsername, updatedEmail, updatedAddress) => {
    handleUpdate(id, updatedUsername, updatedEmail, updatedAddress);
  };

  const handleDelete = (id) => {
    handleDeleteUser(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(user.id, 'NewUsername', 'NewEmail', 'NewAddress')}>
                Edit
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;