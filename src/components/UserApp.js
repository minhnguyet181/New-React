// import React from 'react';
// import './UserApp.css'; // Importing the CSS file for extra styling
// import UserList from './UserList';
// import UserForm from './Userform';
// import { Container } from 'react-bootstrap';

// const UserApp = () => {
//   const [users, setUsers] = React.useState([]);
//   const [currentUser, setCurrentUser] = React.useState(null);

//   // Example handlers for CRUD operations
//   const createUser = (user) => setUsers([...users, user]);
//   const updateUser = (user) =>
//     setUsers(users.map((u) => (u.id === user.id ? user : u)));
//   const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));
//   const editUser = (user) => setCurrentUser(user);

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center">User Management</h1>
//       <UserForm createUser={createUser} updateUser={updateUser} currentUser={currentUser} />
//       <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
//     </Container>
//   );
// };

// export default UserApp;
