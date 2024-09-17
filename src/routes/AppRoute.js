import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from '../components/UserList';
import UserForm from '../components/Userform';

const AppRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
      </Routes>

  );
};

export default AppRoutes;
