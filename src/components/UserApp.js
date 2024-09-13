import React, { useState, useEffect }from 'react';
import './UserApp.css'; // Importing the CSS file for extra styling
import UserList from './UserList';
import UserForm from './Userform';
import { Container } from 'react-bootstrap';
import axios from 'axios';

  const UserApp = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
  
    // Fetch all users from the API
    useEffect(() => {
      axios.get('http://localhost:3000/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => console.error(error));
    }, []);
  
    // Create a new user
    const createUser = (user) => {
      axios.post('http://localhost:3000/users', user)
        .then(response => {
          setUsers([...users, response.data]);
        })
        .catch(error => console.error(error));
    };
  
    // Update an existing user
    const updateUser = (user) => {
      axios.put(`http://localhost:3000/users/${user.id}`, user)
        .then(response => {
          setUsers(users.map(u => (u.id === user.id ? response.data : u)));
          setCurrentUser(null);
        })
        .catch(error => console.error(error));
    };
  
    // Delete a user
    const deleteUser = (id) => {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
        })
        .catch(error => console.error(error));
    };
  
    // Set the current user for editing
    const editUser = (user) => {
      setCurrentUser(user);
    };
  return (
    <Container className="mt-4">
      <h1 className="text-center">User Management</h1>
      <UserForm createUser={createUser} updateUser={updateUser} currentUser={currentUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </Container>
  );
};

export default UserApp;
