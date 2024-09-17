// src/App.js
// import React, { useState, useEffect } from 'react';
// import UserForm from './components/Userform';
// import UserList from './components/UserList';
// import userService from './components/userService';
import './App.css';
import UserApp from './components/UserApp';
function App() {
  // const [users, setUsers] = useState([]);
  // const [editingUser, setEditingUser] = useState(null);

  // useEffect(() => {
  //   // Load users from the userService when the component mounts
  //   async function fetchUsers() {
  //     const userList = await userService.getUsers();
  //     setUsers(userList);
  //   }
  //   fetchUsers();
  // }, []);

  // // Add a new user
  // const addUser = async (user) => {
  //   const newUser = await userService.addUser(user);
  //   setUsers([...users, newUser]);
  // };

  // // Delete a user
  // const deleteUser = async (id) => {
  //   await userService.deleteUser(id);
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  // // Start editing a user
  // const startEditing = (user) => {
  //   setEditingUser(user);
  // };

  // // Edit an existing user
  // const editUser = async (updatedUser) => {
  //   const user = await userService.updateUser(updatedUser.id, updatedUser);
  //   setUsers(users.map((u) => (u.id === user.id ? user : u)));
  //   setEditingUser(null); // Clear editing state
  // };

  return (
    <div className="App">
      <h1>User Information Management</h1>
      {/* <UserForm addUser={addUser} editUser={editUser} editingUser={editingUser} />
      <UserList users={users} deleteUser={deleteUser} startEditing={startEditing} /> */}
      <UserApp/>
    </div>
  );
}

export default App;
