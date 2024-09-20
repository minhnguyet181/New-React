import React, { useState } from 'react';

// Fetch the API URL from environment variables
const apiUrl = process.env.BACKEND_API_URL;

const UserForm = ({ onSaveUser, editUser, editMode }) => {
  const [user, setUser] = useState(
    editMode ? editUser : { name: '', email: '', password: '', address: '' }
  );

  // Function to handle user addition or update
  const handleSubmit = () => {
    if (user.name && user.email && user.password && user.address) {
      // Determine whether to create or update the user
      const url = editMode ? `${apiUrl}/users/${user.id}` : `${apiUrl}/users`;
      const method = editMode ? 'PUT' : 'POST';

      // Make the API request
      fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          onSaveUser(data); // Callback to parent component to update state
          if (!editMode) {
            // Clear form if adding a new user
            setUser({ name: '', email: '', password: '', address: '' });
          }
        })
        .catch((error) => console.error('Error saving user:', error));
    }
  };

  return (
    <div className="user-form">
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {editMode ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default UserForm;
