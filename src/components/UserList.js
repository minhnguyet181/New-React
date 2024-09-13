import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const UserList = ({ deleteUser, editUser }) => {
    const [users, setUsers] = useState([]);

    // Lấy danh sách người dùng từ API khi component được mount
    useEffect(() => {
      axios
        .get('http://localhost:1004/users') // Địa chỉ API từ backend NestJS
        .then((response) => {
          setUsers(response.data); // Cập nhật danh sách người dùng
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
  return (
    <div>
      <h2 className="mt-4">User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td> {user.address}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => editUser(user)}
                    className="mr-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserList;
