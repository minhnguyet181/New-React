import React from 'react';

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={user.id}>
          <span>
            {user.name} - {user.email} - {user.address}
          </span>
          <button onClick={() => onEditUser(index)}>✏️</button>
          <button onClick={() => onDeleteUser(user.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

