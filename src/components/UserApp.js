import React, { useState, useEffect } from 'react';
import UserForm from './Userform';
import UserList from './UserList';

const apiUrl = process.env.BACKEND_API_URL;

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = (newUser) => {
    fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]))
      .catch((error) => console.error('Error adding user:', error));
  };

  const handleDeleteUser = (id) => {
    fetch(`${apiUrl}/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error('Error deleting user:', error));
  };

  const handleEditUser = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  const handleSaveEdit = (updatedUser) => {
    fetch(`${apiUrl}/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = data;
        setUsers(updatedUsers);
        setEditIndex(null);
        setEditUser(null);
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div className="user-app">
      <UserForm
        onSaveUser={editIndex !== null ? handleSaveEdit : handleAddUser}
        editUser={editUser}
        editMode={editIndex !== null}
      />
      <UserList users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UserApp;
