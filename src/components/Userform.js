import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const UserForm = ({ createUser, updateUser, currentUser }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '', address: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
    } else {
      createUser(user);
    }
    setUser({ name: '', email: '', password: '', address: '' });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="user-form">
      <h2>{user.id ? 'Edit User' : 'Add New User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
              />
            </Form.Group>
          </Col>
        </Row>
     
        <Button variant="primary" type="submit" className="mt-3">
          {user.id ? 'Update User' : 'Create User'}
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
