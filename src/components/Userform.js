import React, { useState } from 'react';

// Fetch the API URL from environment variables
const apiUrl = process.env.REACT_APP_API_URL;

const UserForm = ({ onSaveUser, editUser, editMode }) => {
  const [user, setUser] = useState(
    editMode ? editUser : { name: '', email: '', password: '', address: '' }
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle user addition or update
  const handleSubmit = () => {
    // Check if all fields are filled
    if (!user.name || !user.email || !user.password || !user.address) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

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
        setMessage(editMode ? "User updated successfully!" : "User added successfully!");
        if (!editMode) {
          setUser({ name: '', email: '', password: '', address: '' }); // Reset form if adding new user
        }
      })
      .catch((error) => {
        console.error('Error saving user:', error);
        setError("An error occurred while saving the user. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Stop loading after request is done
      });
  };

  return (
    <div className="user-form">
      {/* Input fields for name, email, password, and address */}
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        disabled={loading}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Address"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
        disabled={loading}
      />

      {/* Button to submit the form */}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Saving...' : editMode ? 'Save' : 'Add'}
      </button>

      {/* Display success or error messages */}
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default UserForm;
