// src/UserApp.js
import React, { useState, useEffect } from 'react';
import './UserApp.css'; // Create this CSS file for styling

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', address :'' });
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({ name: '', email: '', password: '', address:'' });

  // Fetch user data from the backend
  useEffect(() => {
    fetch('http://localhost:1081/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Add new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.password && newUser.address) {
      fetch('http://localhost:1081/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setNewUser({ name: '', email: '', password: '', address:''});
        })
        .catch((error) => console.error('Error adding user:', error));
    }
  };

  // Delete user
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:1081/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  // Edit user
  const handleEditUser = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  const handleSaveEdit = () => {
    fetch(`http://localhost:1081/users/${editUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = updatedUser;
        setUsers(updatedUsers);
        setEditIndex(null);
        setEditUser({ name: '', email: '', password: '', address:'' });
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div className="user-app">
      <div className="add-user">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
                <input
          type="text"
          placeholder="Address"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
        />
        <button onClick={handleAddUser}>Add</button>
      </div>

      {editIndex !== null && (
        <div className="edit-user">
          <input
            type="text"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <input
            type="text"
            value={editUser.address}
            onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}

      <ul className="user-list">
        {users.map((user, index) => (
          <li key={user.id}>
            <span>{user.name} - {user.email} - {user.password} - {user.address}</span>
            <button onClick={() => handleEditUser(index)}>✏️</button>
            <button onClick={() => handleDeleteUser(user.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserApp;
